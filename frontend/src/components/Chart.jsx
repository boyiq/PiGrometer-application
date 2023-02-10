import React, { useState, useEffect } from 'react';
import {LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { transform } from '../helpers/transform.js'
import { ticksArr } from '../helpers/timeTicks.js'
import {tickFormatter_1, tickFormatter_2} from '../helpers/tickFormatters.js'
import config from '../config.js';
import axios from 'axios';
import moment from 'moment';
import CustomTooltip from './CustomTooltip.jsx';

const Chart = ({history}) => {
  const [rawData, setRawData] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(()=>{
    axios.get(`http://${config.API}:5000/data?granularity=300&history=${history}`)
    .then(({data})=>{
      setRawData(data)
      setFirstLoad(false)
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [history])

  const data = transform(rawData)

  if (firstLoad) {
    return (
      <div>Loading</div>
    );
  }

  return (
    <LineChart
      width={800}
      height={500}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <XAxis 
        dataKey="raw"
        type="number"
        domain={['dataMin', 'dataMax']}
        tickFormatter={history === 1 ? tickFormatter_1 : tickFormatter_2}
        ticks={history === 1 ? ticksArr(data): []}
        tickCount={history === 3 ? '4' : '8'}
      />
      <YAxis 
        yAxisId="left"
        type="number"
        dataKey="temperature"
        domain={['auto', 'auto']}
        allowDataOverflow
      />
      <YAxis 
        yAxisId="right"
        type="number"
        dataKey="humidity"
        domain={['auto', 'auto']}
        orientation="right" 
        allowDataOverflow
      />
      <Tooltip content={<CustomTooltip />}/>
      <Legend />
      <Line 
        yAxisId="left"
        dot = {false}
        type="monotone"
        dataKey="temperature"
        stroke="#FF7000"
        strokeWidth={2}
        activeDot={{r:8}}
      />
      <Line 
        yAxisId="right"
        dot = {false}
        type="monotone"
        dataKey="humidity"
        stroke="#540375"
        strokeWidth={2}
        activeDot={{r:8}}
      />
    </LineChart>
  )
}

export default Chart
  



import React, { useState, useEffect } from 'react';
import {LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { transform } from '../helpers/transform.js'
import { ticksArr } from '../helpers/timeTicks.js'
import {tickFormatter_1, tickFormatter_2} from '../helpers/tickFormatters.js'
import config from '../config.js';
import axios from 'axios';
import CustomTooltip from './CustomTooltip.jsx';
import {getDomain, getTicks, timeFormatter_2} from '../helpers/timeTest.js';
import moment from 'moment'

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
  console.log('getticks3', getTicks(3).map((item)=>(moment(item).format('MM-DD'))))
  console.log('getticks7', getTicks(7))
  console.log('domain array is ', getDomain(history).domainArr)

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
        scale="time"
        domain={history === 1? ['dataMin', 'dataMax'] : getDomain(history).domainArr}
        tickFormatter={history === 1 ? tickFormatter_1 : tickFormatter_2}
        ticks={history === 1 ? ticksArr(data): getTicks(history)}
        // tickCount={history === 3 ? '4' : '8'}
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
  



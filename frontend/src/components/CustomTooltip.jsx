import React from 'react';
import moment from 'moment';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${moment(label * 1000).format('ll')}`}</p>
          <p className="label">{`${moment(label * 1000).format('LT')}`}</p>
          <p className="label">{`temperature : ${payload[0].value} °C`}</p>
          <p className="label">{`humidity : ${payload[1].value} %`}</p>
        </div>
      );
    }
  }

export default CustomTooltip

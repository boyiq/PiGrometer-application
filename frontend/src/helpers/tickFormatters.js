import moment from 'moment';
import * as d3 from 'd3';

const tickFormatter_1 = (tick) => 
    moment(tick * 1000).format('LT')


const tickFormatter_2 = (tick) => {
    return moment(tick).format('ll')
    // return d3.timeFormat('%B %d')(new Date(tick));
};


export {tickFormatter_1, tickFormatter_2}
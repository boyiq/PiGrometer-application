import moment from 'moment';
const tickFormatter_1 = (tick) => 
    moment(tick * 1000).format('LT')


const tickFormatter_2 = (tick) => 
    moment(tick * 1000).format('MM/DD')


export {tickFormatter_1, tickFormatter_2}
import * as d3 from 'd3';
import { timeDay } from 'd3-time';
import moment from 'moment'

const now = new Date();
const domain1 = d3.timeHour.floor(now)
// const lower1 = new Date(domain1.getTime() - 24 * days * 3600 * 1000);
// const higher1 = new Date(domain1.getTime() + 24 * days * 3600 * 1000);
// const test = 

const getDomain = (days) => {
    let result = {}
    const lower = new Date(domain1.getTime() - 24 * days * 3600 * 1000);
    const higher = new Date(domain1.getTime() + 24 * days * 3600 * 1000);
    const domain = d3.scaleTime().domain([lower, now]);
    result.domainFunc = domain
    result.domainArr = [lower, now]
    return result;
}

//const domainToday = getDomain(3).domainFunc

const getTicks = (days) => {
    const ticks = getDomain(days).domainFunc.ticks(d3.timeDay.every(1))
    const newTicks = ticks.map((tick)=>{
        return tick.getTime()
    })
    return ticks;
}

const timeFormatter_2 = (tick) => {
    return d3.timeFormat('%H:%M:%S')(new Date(tick));
}


// const domainToday = d3.scaleTime().domain([d3.timeDay.floor(now), d3.timeDay.ceil(now)]);
// const timeFormatter = (tick) => {return timeFormat('%H:%M:%S')(new Date(tick));};
// const ticks = domainToday.ticks(timeHour().every(1));

export {getDomain, getTicks, timeFormatter_2}
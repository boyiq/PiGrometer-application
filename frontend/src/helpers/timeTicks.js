const ticksArr =  (dataSet) => {
  let result = [];
  let tick = dataSet[0].raw;
  while (tick < dataSet[dataSet.length - 1].raw) {
    tick += 3600;
    result.push(tick);
  }
  return result;
}

// const ticksArr_2 = (dataSet) => {
//   let results = []

// }

export {ticksArr}
export default function iterateThroughObject(reportWithIterator) {
  const iterator = reportWithIterator[Symbol.iterator]();
  let result = '';

  for (const employee of iterator) {
    result += `${employee} | `;
  }

  // Remove the last ' | ' from the end of the string
  result = result.slice(0, -3);

  return result;
}

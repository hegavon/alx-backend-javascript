export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  for (const department in reportWithIterator.allEmployees) {
    if (Object.prototype.hasOwnProperty.call(reportWithIterator.allEmployees, department)) {
      for (const employee of reportWithIterator.allEmployees[department]) {
        result += `${employee} | `;
      }
    }
  }

  // Remove the trailing ' | ' if there are employees
  if (result.length > 0) {
    result = result.slice(0, -3); // Remove the last ' | '
  }

  return result;
}

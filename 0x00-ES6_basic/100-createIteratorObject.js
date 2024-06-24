export default function createIteratorObject(report) {
  const departments = Object.keys(report);

  function* employeeIterator() {
    for (const department of departments) {
      for (const employee of report[department]) {
        yield employee;
      }
    }
  }

  return {
    [Symbol.iterator]: employeeIterator,
  };
}

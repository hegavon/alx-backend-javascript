#!/usr/bin/env node

const fs = require('fs');

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;

  try {
    const fileContents = fs.readFileSync(fileName, 'utf-8');
    const lines = fileContents.toString().split('\n');

    for (let i = 0; i < lines.length; i += 1) {
      // Skip empty lines
      if (lines[i]) {
        length += 1;
        const field = lines[i].toString().split(',');

        // Add student name to the corresponding field
        if (Object.prototype.hasOwnProperty.call(students, field[3])) {
          students[field[3]].push(field[0]);
        } else {
          students[field[3]] = [field[0]];
        }

        // Count the number of students in each field
        if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
          fields[field[3]] += 1;
        } else {
          fields[field[3]] = 1;
        }
      }
    }

    const l = length - 1; // Assuming the first line is a header
    console.log(`Number of students: ${l}`);

    // Iterate through each field and print the statistics
    for (const [key, value] of Object.entries(fields)) {
      // Skip if the key is 'field' (assuming it's from the header)
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;

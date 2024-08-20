#!/usr/bin/env node

const fs = require('fs');

/**
 * Reads a database of students from a CSV file and logs student counts.
 *
 * @param {string} path - The path to the CSV database file.
 */
function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data into lines, then filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Get the number of students
    const numStudents = lines.length;
    console.log(`Number of students: ${numStudents}`);

    // Create a map to store student counts per field
    const fieldCounts = {};

    // Iterate over each student (line) in the database
    for (let i = 1; i < lines.length; i += 1) {
      // Split each line into fields
      const fields = lines[i].split(',');
      // Extract the student's field of study
      const field = fields[fields.length - 1];

      // If the field already exists in the map, increment the count
      if (fieldCounts[field]) {
        fieldCounts[field].count += 1;
        fieldCounts[field].names.push(fields[0]);
      } else {
        // Otherwise, initialize the field with a count of 1 and the student's name
        fieldCounts[field] = { count: 1, names: [fields[0]] };
      }
    }

    // Iterate over each field and log the student count and list of names
    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        const { count } = fieldCounts[field];
        const names = fieldCounts[field].names.join(', ');
        console.log(`Number of students in ${field}: ${count}. List: ${names}`);
      }
    }
  } catch (error) {
    // If there's an error reading the file, throw an error
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

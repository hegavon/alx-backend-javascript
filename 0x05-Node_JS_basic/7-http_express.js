#!/usr/bin/env node

const express = require('express');
const { readFile } = require('fs');

const app = express();
const port = 1245;

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    readFile(fileName, (err, data) => {
      if (err) {
        reject(Error('Cannot load the database')); // Reject with an Error object
      } else {
        let output = '';
        const lines = data.toString().split('\n');
        for (let i = 1; i < lines.length; i += 1) { // Start from index 1 to skip header
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
        output += `Number of students: ${length}\n`; // Use actual length
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => { // Use async/await
  try {
    const output = await countStudents(process.argv[2].toString());
    res.send(`This is the list of our students\n${output}`);
  } catch (error) {
    res.status(500).send('Cannot load the database');
  }
});

app.listen(port, () => {
  console.log('Server running at http://localhost:1245/'); // Add console log
});

module.exports = app;

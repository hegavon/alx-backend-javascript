#!/usr/bin/env node

const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

// Create an HTTP server instance
const app = http.createServer((req, res) => {
  // Set the response header to plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Check the URL path and send the appropriate response
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    // Call the countStudents function with the database file path
    countStudents(process.argv[2])
      .then(() => {
        res.end();
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.end(' ');
  }
});

// Make the server listen on the specified port and hostname
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Export the app variable
module.exports = app;

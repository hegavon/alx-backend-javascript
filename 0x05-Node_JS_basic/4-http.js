#!/usr/bin/env node

const http = require('http');

// Create an HTTP server instance
const app = http.createServer((req, res) => {
  // Set the response header to plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body
  res.end('Hello Holberton School!');
});

// Make the server listen on port 1245
app.listen(1245);

// Log a message to the console to indicate the server is running
console.log('Server running at http://localhost:1245/');

// Export the app variable
module.exports = app;

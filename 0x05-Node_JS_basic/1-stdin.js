#!/usr/bin/env node

// Import the 'process' module to interact with stdin and stdout
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input
process.stdin.on('data', (data) => {
  const name = data.toString().trim(); // Get the input and remove any extra whitespace
  console.log(`Your name is: ${name}`);
  process.stdout.write('This important software is now closing\n');
  process.exit(); // Exit the program after displaying the closing message
});

0x05. Node.js Basics
Overview
This project introduces the basics of Node.js, focusing on essential concepts like working with standard input and output, handling files, and interacting with the file system. By the end of this project, you will have a strong foundation in using Node.js for backend development and scripting.

Learning Objectives
Understand the difference between const, let, and var in JavaScript.
Know the basics of Node.js and how to run JavaScript code using Node.js.
Use the process module to interact with the command line.
Learn how to read and write files synchronously and asynchronously.
Handle errors effectively in Node.js.
Use modules to organize your code.
Requirements
Node.js (v14.x or later)
ESLint with the Airbnb JavaScript style guide
Pycodestyle for checking compliance with style requirements (if applicable)
Project Structure
The project contains the following files:

c
Copy code
.
├── 0-console.js
├── 1-stdin.js
├── 2-read_file.js
├── 3-read_file_async.js
├── 4-http_server.js
├── 5-http_app.js
├── 6-create_file.js
├── 7-copy_file.js
└── 8-create_server.js
Tasks
0. Console Log
File: 0-console.js

Write a program that displays "Welcome to Holberton School" followed by a new line using console.log.

1. Standard Input and Output
File: 1-stdin.js

Create a program that interacts with the user via the command line:

Display the message "Welcome to Holberton School, what is your name?".
Wait for the user to input their name.
Display "Your name is: [user input]".
When the user exits the program, display "This important software is now closing".
2. Reading a File Synchronously
File: 2-read_file.js

Create a script that reads a file synchronously:

The file path should be passed as a command-line argument.
If the file cannot be opened or read, log an error to the console.
3. Reading a File Asynchronously
File: 3-read_file_async.js

Create a script that reads a file asynchronously:

The file path should be passed as a command-line argument.
If the file cannot be opened or read, log an error to the console.
4. Creating a Simple HTTP Server
File: 4-http_server.js

Create a simple HTTP server using Node.js:

The server should listen on port 1245.
The root route / should return a simple message "Hello Holberton School!".
5. HTTP Server with File Handling
File: 5-http_app.js

Extend the previous HTTP server:

Add a new route /students that returns the content of a file in JSON format.
The file path should be passed as an environment variable.
Handle errors gracefully if the file cannot be read.
6. Creating a File
File: 6-create_file.js

Create a script that writes content to a file:

The file path and content should be passed as command-line arguments.
If the file already exists, overwrite its content.
7. Copying a File
File: 7-copy_file.js

Create a script that copies content from one file to another:

The source and destination file paths should be passed as command-line arguments.
If the source file cannot be read or the destination file cannot be written, log an error to the console.
8. Creating an HTTP Server with Routing
File: 8-create_server.js

Create an HTTP server with multiple routes:

The server should listen on port 1245.
Add routes / and /students with corresponding functionalities.
The /students route should return a JSON response with the content of a file, similar to the previous tasks.
How to Run
To run the programs in this project, use the following commands:

Ensure that Node.js is installed on your system.
Navigate to the directory containing the files.
Run the scripts using Node.js:
bash
Copy code
# Run the first task
node 0-console.js

# Run the second task
node 1-stdin.js

# Run the third task (provide a file path as an argument)
node 2-read_file.js file.txt

# Run the fourth task (provide a file path as an argument)
node 3-read_file_async.js file.txt

# Run the fifth task
node 4-http_server.js

# Run the sixth task (provide file path and content as arguments)
node 6-create_file.js file.txt "Hello, Holberton!"

# Run the seventh task (provide source and destination file paths as arguments)
node 7-copy_file.js source.txt destination.txt

# Run the eighth task
node 8-create_server.js
Example Output for 1-stdin.js
bash
Copy code
$ node 1-stdin.js
Welcome to Holberton School, what is your name?
Victor
Your name is: Victor
This important software is now closing

Author
Victor Amajuoyi


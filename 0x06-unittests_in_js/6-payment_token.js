#!/usr/bin/env node

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

function getPaymentTokenFromAPI(success) {
    if (success) {
	return new Promise((resolve) => {
          resolve({data: 'Successful response from the API' });
	});
    }
}

module.exports = getPaymentTokenFromAPI;

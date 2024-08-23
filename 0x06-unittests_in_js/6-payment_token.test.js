#!/usr/bin/env node

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

const getPaymentTokenFromAPI = require("./6-payment_token");
const {describe, it} = require("mocha");
const expect = require("chai").expect;

describe("getPaymentTokenFromAPI", function() {
    it("Async testing with done callback", function(done) {
	getPaymentTokenFromAPI(true)
	    .then((data) => {
		expect(data).to.have.property('data');
		done();
	    });
    });
});
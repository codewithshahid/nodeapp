const app  = require('express');
const dotenv = require('dotenv');

module.exports = app();

dotenv.config({
    path: './data/config.env',
})
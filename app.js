const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.options('*', cors());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser);







module.exports = app;
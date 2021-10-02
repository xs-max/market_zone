const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');

const app = express();

app.use(cors());
app.options('*', cors());




module.exports = app;
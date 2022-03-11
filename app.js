const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const userRoutes = require('./src/routes/userRouter');
const AppError = require('./src/utils/appError');
const globallErrorHandler = require('./src/controllers/errorController');

const app = express();

app.use(cors());
app.options('*', cors());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


app.use('/api/v1/users', userRoutes);



app.all('*', (req, res, next) => {

   
    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));

});


app.use(globallErrorHandler)
module.exports = app;
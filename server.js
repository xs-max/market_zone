const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({
    path: './config.env'
});

const app = require('./app');

const DB = process.env.DATABASE_LOCAL;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
 }).then(con => {
     console.log('Db connection successful!');
 }).catch(err => console.log(err.message));

 const port = process.env.PORT || 8080;
 const server = app.listen(port, () => {
    console.log(`App running on port ${port}`)
 });
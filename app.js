//import express
const express = require('express');

//importting body parser
const bodyParser = require('body-parser');

//importing cors
const cors = require('cors');

//importing database from util
const sequelize = require('./util/database');

//importing routes
const routes = require('./routes/userRoutes')

const User = require('./model/user');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors())
app.use(bodyParser.json())

//listening to routes
app.use('/user',routes)

//starting the server
sequelize.sync()
.then(()=>{
    const port = 4000;
    console.log(`Backend Server Started ${port}`);
    app.listen(port);
})
.catch(err =>{
    console.log(err);
})
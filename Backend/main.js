const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/tut')
const mongoose = require('mongoose')

const app = express() 

mongoose.connect('mongodb://localhost/ninjago')
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/',routes)
app.listen(2000)
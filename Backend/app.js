var express  = require('express');
const users= require('./service/UserService')
const route= require('./routing/route')
const user= require('./Model/user')
const bodyParser = require('body-parser')



const app= express();

var port = 9898

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use('/', route)
app.use(bodyParser.json());
app.listen(port,()=>{
    console.log("server is running", port);

})
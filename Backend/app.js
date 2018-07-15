var express  = require('express');
const users= require('./service/UserService')
const route= require('./routing/route')
const user= require('./Model/user')
const bodyParser = require('body-parser')
const jwt=require('jsonwebtoken')


const app= express();

var port = 5000;



app.use(express.urlencoded({extended:true}))

app.use('/', route)
app.get('/api',(req,res)=>{
    res.json({
        text:'Welcome to the api'
    });
});
app.post('/api/login',function(req,res){
    const user={id:3};
    const token=jwt.sign({user},'my_secret_key')
    res.json({
        token:token
    });
});
app.post('/api/posts',(req,res)=>{
    res.json({
        message:'Posts created...'
    });
});
app.post('/api/protected',ensureToken,(req,res)=>{
    jwt.verify(req.token,'my_secret_key',function(err,data){
     if(err){
         res.sendStatus(403);
     }
     else{
        res.json({
            text:'This protected...'
        });
     }
    })
   
});
function ensureToken(req,res,next){
    const bearerHeader=req.headers["authorization"];
    if(typeof bearerHeader!=='undefined' ){
        const bearer=bearerHeader.split(" ");
        const bearerToken=brearer[1];
        req.token=bearerToken;
        next();
    }
    else{
        res.sendStatus(403);
    }
}
app.listen(port,()=>{
    console.log("server is running", port);

})
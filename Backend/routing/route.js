const express= require('express')
const User= require('../Model/user')
const UserData= require('../service/dbService')
const UserService= require('../service/UserService')
const router= express.Router();
const jwt= require('jsonwebtoken');
const mongoose= require("mongoose")

 userService= new UserService();

// router.post('/addUsers', verifyToken, function(req,res)
// { jwt.verify(req.token, 'secretkey', (err, authData)=>{
//         if(err){
//             res.sendStatus(403)
//         } else{
    
// userService.addUser(req.body.email,req.body.firstName,req.body.lastName,req.body.age,req.body.password, req.body.phone,req.body.accountId, req.body.currentDebit,req.body.salary,req.body.status,req.body.debitHistory,req.body.transactionHistory);
//     console.log("added user is"+req.body.firstname)
//             res.json({
//              message: 'postCreated...',
//               authData
//             })
//             res.end();}
//     })
// })
router.get('/users', verifyToken, function(req,res){ 
    jwt.verify(req.token,'secretkey', (err, authData)=>{
if(err){
    res.sendStatus(403)
}
else{
    userService.getUsers().then(data=>{res.json(data)})
}
    });   
});

router.get('/:id',verifyToken, function(req,res){
    jwt.verify(req.token,'secretkey', (err, authData)=>{
        if(err){
            res.sendStatus(403)
        } 
        else{
            userService.getUser(req.params.id).then(data=>{res.json(data)})  }
    });
   
 });
 router.delete('/:id',function(req,res){
     console.log("am in delete")
    /*jwt.verify(req.token),'secretkey', (err, authData)=>{
     if(err){
            res.sendStatus(403)
            console.log("deleting not working")
        } 
        else{*/
            userService.deleteUser(req.params.id)
            console.log("deleting not working")
            //res.end()
            
        //}  
     //}  
})
router.put('/:id', function(req, res){
    let user  = new User(req.body.email,req.body.firstName, req.body.lastName,req.body.age,req.body.password,req.body.phone,req.body.accountId, req.body.currentDebit,req.body.salary,req.body.status,req.body.debitHistory,req.body.transactionHistory)
    userService.updateById(user)
    res.end()
})
router.put('/userEdit/:name', function(req, res){
    userService.updateByName(req.params.name)
    res.end()
})
function verifyToken(req,res,next){  
var bearerHeader = req.headers["authorization"];
if(typeof bearerHeader!=='undefined'){
    const bearer= bearerHeader.split(" ");
    const bearerToken= bearer[1];
    req.token=bearerToken
    next();

}else{
    res.sendStatus(403);
}
}
router.post('/signup', (req,res,next)=>{
    console.log("am here singingup")
   UserData.find({email:req.body.email}).exec()
   .then(user=>{
       if(user.length>=1){
           return res.status(409).json({
               message:"mail exists"
           })
       } else{
            userService.addUser(req.body.email,req.body.firstName, req.body.lastName,req.body.age,req.body.password,req.body.phone,req.body.accountId, req.body.currentDebit,req.body.salary,req.body.status,req.body.debitHistory,req.body.transactionHistory);    
           // console.log("added user is"+req.body.name)
            res.json({
             message: 'postCreated...',
         
            })
            console.log("***** "+req.body.firstName)
            res.end();
              }
           })      
})
router.post('/login',(req,res,next)=>{
    UserData.find({email:req.body.email}).exec().then(user=>{
            console.log("am here comparing")
            console.log(user[0].email)   
    if(user[0].email == req.body.email && user[0].password ==req.body.password){
       token= jwt.sign({email:user[0],
            password:user[0]}, 'secretkey', {
                expiresIn:"1h"
            })
        return res.status(200).json({
            messagge: "Authentication successfull",
            token:token
        });
        }
        res.status(401).json({
            message:'auth failed'
        })
    })
})


router.patch('/:id', (req, res, next)=>{
    console.log("am patching")
    const id= req.params.accountId
    const updateops={};
    for(const opps of req.body){
        updateops[opps.propName]=opps.value;
    }
    UserData.update({accountId:id},{$set:updateops}).exec().then(result=>{
        console.log("update is" +req.body.firstName);
        res.status(200).json(result)
    
    }).catch(err=>{
console.log(err);
res.status(500).json({
    error:err
})
    
})
})
    


module.exports=router



const express= require('express')
const User= require('../Model/user')
const UserLogin= require('../Model/UserLogin')
const UserService= require('../service/UserService')
const router= express.Router();
const jwt= require('jsonwebtoken');
const mongoose= require("mongoose")
//const bcrypt= require('bycrypt');

 userService= new UserService();

router.post('/addUsers', verifyToken, function(req,res)
{
    jwt.verify(req.token, 'secretkey', (err, authData)=>{
        if(err){
            res.sendStatus(403)
        } else{
        userService.addUser(req.body.accountId, req.body.name, req.body.age, req.body.salary, req.body.email);
        console.log("added user is"+req.body.name)
            res.json({
             message: 'postCreated...',
              authData
            })
            res.end();
        }
    })
    
})
router.get('/users', function(req,res){   
    userService.getUsers().then(data=>{res.json(data)})
})

router.get('/:id',function(req,res){
    userService.getUser(req.params.id).then(data=>{res.json(data)})
 })

 router.delete('/:id',function(req,res){
    userService.deleteUser(req.params.id)
    res.end()
})


router.put('/:id', function(req, res){
    let user  = new User(req.body.accountId, req.body.name, req.body.age, req.body.salary, req.body.email)
    userService.updateById(user)
    res.end()
})

router.put('/userEdit/:name', function(req, res){
    userService.updateByName(req.params.name)
    res.end()
})



// router.post('/login', (req,res)=>{
//     const loguser= {
//         id: 1,
//         username: "brad",
//         email: "getbirte@yahoo.com"
//     }
//     jwt.sign({loguser}, 'secretkey',(err,token)=>{
//         res.json({
//             token
//         })
//     })
// })

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
   UserLogin.find({email:req.body.email}).exec()
   .then(user=>{
       if(user.length>=1){
           return res.status(409).json({
               message:"mail exists"
           })
       } else{
         /* bcrypt.hash(req.body.password, 10, (err,hash)=>{
              if(err){
                  return res.status(500).json({
                      error:err
                  })
              } */
              
                  const user= new UserLogin({
                      email:req.body.email,
                      password:req.body.password
                  })
                  user.save().then(result=>{
                      console.log(result)
                      res.status(201).json({
                          message:"user Created"
                        
                      })
                      res.end()
                  }).catch(err=>{
                   console.log(err);
                   res.status(500).json({
                       error:err
                   })
                   res.end()
                  })
              }
           })
       
   
})

router.post('/login',(req,res,next)=>{
    UserLogin.find({email:req.body.email}).exec().then(user=>{
            console.log("am here comparing")
            console.log(user[0].email)
          
    if(user[0].email == req.body.email && user[0].password ==req.body.password){

        
        return res.status(200).json({
            messagge: "Authentication successfull"
        });
        }
        res.status(401).json({
            message:'auth failed'
        })
// bcrypt.compare(req.body.password, user[0].password,(err, result)=>{
//    if(err){
//        return res.status(401).json({
//            message: 'Auth failed'
//        });
//    } 

//    if(result){
//        return res.status(200).json({
//            messagge: "Authentication successfull"
//        });
//    }
//    res.status(401).json({
//        message:'auth failed'
//    })
// })

    })
})


module.exports=router



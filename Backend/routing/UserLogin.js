const express= require('express')
const UserLogin= require('../Model/UserLogin')
const UserService= require('../service/UserService')
const router= express.Router();
const jwt= require('jsonwebtoken');
const bcrypt= require('bycrypt');

 userService= new UserService();

 router.post('/signup', (req,res,next)=>{
     console.log("am here singingup")
    UserLogin.find({email:req.body.email}).exec()
    .then(user=>{
        if(user.length>=1){
            return res.status(409).json({
                message:"mail exists"
            })
        } else{
            bcrypt.hash(req.body.password, 10, (err,hash)=>{
               if(err){
                   return res.status(500).json({
                       error:err
                   })
               } 
               else {
                   const user= new LoginUser({
                       _id:new mongoose.Types.ObjectID(),
                       email:req.body.email,
                       password:hash
                   })
                   user.save().then(result=>{
                       console.log(result)
                       res.status(201).json({
                           message:"user Created"
                       })
                   }).catch(err=>{
                    console.log(err);
                    res.status(500).json({
                        error:err
                    })
                   })
               }
            })
        }
    })
 })

router.post('/login',(req,res,next)=>{
    UserLogin.find({email:req.body.email}).exec().then(user=>{
        if(user.length<1){
            return res.status(401).json({
                message: 'Auth Failed'
            })
        }
bcrypt.compare(req.body.password, user[0].password,(err, result)=>{
   if(err){
       return res.status(401).json({
           message: 'Auth failed'
       });
   } 

   if(result){
       return res.status(200).json({
           messagge: "Authentication successfull"
       });
   }
   res.status(401).json({
       message:'auth failed'
   })
})

    })
})

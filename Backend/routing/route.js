const express= require('express')
const User= require('../Model/user')
const UserService= require('../service/UserService')
const router= express.Router();
const jwt= require('jsonwebtoken');

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



router.post('/login', (req,res)=>{
    const loguser= {
        id: 1,
        username: "brad",
        email: "getbirte@yahoo.com"
    }
    jwt.sign({loguser}, 'secretkey',(err,token)=>{
        res.json({
            token
        })
    })
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

module.exports=router



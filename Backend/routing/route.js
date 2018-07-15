const express= require('express')
const jwt=require('jsonwebtoken')
const User= require('../Model/user')
const UserService= require('../service/UserService')
const router= express.Router();

 userService= new UserService();

router.post('/addUsers', function(req,res)
{

    userService.addUser(req.body.accountId, req.body.name, req.body.age, req.body.salary, req.body.email);
    res.end()
})
router.get('/users', function(req,res){
    var users= userService.getUsers()
    console.log("the result is "+users)
    res.send(users)
})

router.get('/:id',function(req,res){
    user=  userService.getUser(req.params.id)
     res.send(user)
     
 })


module.exports=router



const user= require('../Model/user')
var mongoose = require("mongoose")
const UserData= require('../service/dbService')
mongoose.connect("mongodb://localhost:27017/MicroFinance")

var User  = new user()
class UserService{

    constructor(){
      //this.users=[{"name": "Behailu"}]
    }
    addUser(email,firstName,lastName,age, password, phone, accountId, currentDebit, salary, status, debitHistory,transactionHistory){
       var myuser={
        email: email, 
        firstName: firstName, 
        lastName: lastName, 
        age:age,
        password: password,
        phone:phone,
        accountId:accountId,
        currentDebit:currentDebit,
        salary:salary,
        status:status,
        debitHistory:debitHistory,
        transactionHistory:transactionHistory,
      

    }
        var data= new UserData(myuser)
        data.save()
    }

    getUsers(){ 
       return  UserData.find()                        
    }

    getUser(id){
    
       return UserData.find({accountId:id})
       }

    deleteUser(id){

        return UserData.deleteOne({accountId:id}).catch(function(err){})

    }
    updateById(user){
        for (var i = 0; i < this.users.length; i ++) {
            if(this.users[i].accountId == user.id){
              this.users[i] = user;               
            }

        }
    }  
    updateByName(user){
        for (var i = 0; i < this.users.length; i++) {
            if(this.users[i].name == user.name){
              this.users[i] = user;               
            }

        }}}    

module.exports= UserService







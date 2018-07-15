const user= require('../Model/user')
var mongoose = require("mongoose")
const UserData= require('../service/dbService')
mongoose.connect("mongodb://localhost:27017/MicroFinance")
var accountId=23423432423;
var User  = new user()
class UserService{

    constructor(){
      //this.users=[{"name": "Behailu"}]
    }
    addUser(name, age, salary, email,password){
       var myuser={accountId: this.accountId++,
        name: name, 
        age: age, 
        salary: salary, 
        email: email,
        password:password}
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

        return UserData.findOneAndRemove({accountId:id})
       
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







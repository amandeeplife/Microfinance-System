const user= require('../Model/user')
var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/MicroFinance")
var Schema= mongoose.Schema;
var userDataSchema= new Schema({
    accountId: String,
    name: String,
    age: String,
    salary: String,
    email: String}, 
    
    {collection:"Users"});

var UserData= mongoose.model('UserData', userDataSchema);
var User  = new user()

class UserService{

    constructor(){
      //this.users=[{"name": "Behailu"}]
    }
    addUser(accountId, name, age, salary, email){
       var myuser={accountId:accountId,
        name: name, 
        age: age, 
        salary: salary, 
        email: email }
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
        // for (var i = 0; i < this.users.length; i++) {
        //     if(this.users[i].accountId == id){
        //       this.users.splice(i,1);               
        //     }
       // }
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







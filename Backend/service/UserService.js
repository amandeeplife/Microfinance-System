// const user= require('../Model/user')
// var mongoose = require("mongoose")
// const UserData= require('../service/dbService')
// mongoose.connect("mongodb://localhost:27017/MicroFinance")

// var User  = new user()
// class UserService{

//     constructor(){
//       //this.users=[{"name": "Behailu"}]
//     }
//     addUser(email,firstName,lastName,age, password, phone, accountId, currentDebit, salary, status, debitHistory,transactionHistory){
//        var myuser={
//         email: email, 
//         firstName: firstName, 
//         lastName: lastName, 
//         age:age,
//         password: password,
//         phone:phone,
//         accountId:accountId,
//         currentDebit:currentDebit,
//         salary:salary,
//         status:status,
//         debitHistory:debitHistory,
//         transactionHistory:transactionHistory,
//     }
//         var data= new UserData(myuser)
//         data.save()
//     }

//     getUsers(){ 
//        return  UserData.find()                        
//     }

//     getUser(id){
    
//        return UserData.find({accountId:id})
//        }

//     deleteUser(id){

//         return UserData.deleteOne({accountId:id}).catch(function(err){})

//     }

//     updateUser(email,firstName,lastName,age, password, phone, accountId, currentDebit, salary, status, debitHistory,transactionHistory){
//         var myuser={
//          email: email, 
//          firstName: firstName, 
//          lastName: lastName, 
//          age:age,
//          password: password,
//          phone:phone,
//          accountId:accountId,
//          currentDebit:currentDebit,
//          salary:salary,
//          status:status,
//          debitHistory:debitHistory,
//          transactionHistory:transactionHistory,
       
//      }
//          var data= new UserData(myuser)
//          console.log("new name is"+myuser.firstName)
//          data.update()
//      }

//     //let myuser  = new User(req.body.email,req.body.firstName, req.body.lastName,req.body.age,req.body.password,req.body.phone,req.body.accountId, req.body.currentDebit,req.body.salary,req.body.status,req.body.debitHistory,req.body.transactionHistory)
//     //var data= new UserData(myuser)
//     //console.log("new name is"+myuser.firstName)
//     //    data.save()
//     //}
//     updateById(id){
//         return  UserData.updateById({accountId:id})     
//          var myuser={
//             email: email, 
//             firstName: firstName, 
//             lastName: lastName, 
//             age:age,
//             password: password,
//             phone:phone,
//             accountId:accountId,
//             currentDebit:currentDebit,
//             salary:salary,
//             status:status,
//             debitHistory:debitHistory,
//             transactionHistory:transactionHistory,
//         }
//          var data= new UserData(myuser)
//          data.save()
//     }
        
                
        
      


    
    
//     updateByName(user){
//         for (var i = 0; i < this.users.length; i++) {
//             if(this.users[i].name == user.name){
//               this.users[i] = user;               
//             }

//         }}  }  

// module.exports= UserService



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
    updateStatus(id){
        console.log(id+"sadfsdfdf")
         UserData.update({accountId: id}, {
            status: "Accepted", 
        }, function(err, affected, resp) {
           console.log(resp);
        })
    }
    getUser(email){
       return UserData.find({email:email})
       }
       
     getUserByAccountId(acct){
        return UserData.find({accountId:acct})
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



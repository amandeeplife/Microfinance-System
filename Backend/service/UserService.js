const user= require('../Model/user')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var User  = new user()
//users=[{"name": "Behailu"}]
class UserService{

    constructor(){
      this.users=[{"name": "Behailu"}]
    }
   
    addUser(accountId, name, age, salary, Email){
        console.log("inside adduser")
       var myuser= new user (accountId, name, age, salary, Email)
        this.users.push(myuser);
        console.log("USer Saved Successfully");
        console.log("Array: "+this.users);
        for (let i=0; i<this.users.length; i++){
            //console.log("the name is "+this.users[i].name)
            console.log("am adding new user>>>>>"+this.users[i].name)
        }
    }

    getUsers(){
        console.log("insdie userservice"+this.users)
        
                return this.users;                    
    }

    getUser(id){
        console.log("insdie getoneUSer"+this.users)
        for (var i = 0; i < this.users.length; i++) {
            if(this.users[i].accountId == id){
                console.log("i am the user"+this.users[i].name)
               return this.users[i];               
            }
        }
    }

    deleteUser(id){

        for (var i = 0; i < this.users.length; i++) {
            if(this.users[i].accountId == id){
              this.users.splice(i,1);               
            }
        }
    }
    updateById(user){
        for (var i = 0; i < this.users.length; i ++) {
            if(this.users[i].accountId == user.id){
              this.users[i] = user;               
            }

        }
    }  
    updateByName(user){
        for (var i = 0; i < this.users.length; i ++) {
            if(this.users[i].name == user.name){
              this.users[i] = user;               
            }

        }}}
//         MongoClient.connect(url).then(function(db)) {
//             console.log(db);

//             db.collection("Users").find().toArray(function(err, result) {
//                                if (err) throw err;
//                                console.log(result);
//                                //myresult=result
                                
//                                db.close();
//                              });
//         });
//     }

// //  getUsers()
// {      
//        return MongoClient.connect(url).then(function(db)) {
//            console.log
//             if (err) throw err;
//             var dbo = db.db("MicroFinance");
//            // var query = { address: "Park Lane 38" };
//             dbo.collection("Users").find().toArray(function(err, result) {
//               if (err) throw err;
//               console.log(result);
//               //myresult=result
                
//               db.close();
//             });
//           });

//           //return myresult
//         }
        
//         var db= collection.db("MicroFinance")
//         users=db.collection("Users").find()
//         for(var i=0; i<this.users.length; i++){
//             return this.users
   
        
//         }
        
//     }
// }
    
       
module.exports= UserService







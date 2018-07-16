

var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/MicroFinance")
var Schema= mongoose.Schema;
var userDataSchema= new Schema({
    email: {
        type:String, 
        required: true, 
        unique: true,
        //match:"^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$"
    },
    password: {
        type:String,
        required:true},
    accountId:String,
    name: String,
    AccountId: String,
    age: String,
    salary: String,
    email: String}, {collection:"Client"});

module.exports=mongoose.model('UserData', userDataSchema);


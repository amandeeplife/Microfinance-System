
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
    firstName:String,
    lastName: String,
    age:Number,
    password: {
      type:String,
      required:true},
    phone:String,
    accountId:String,
    currentDebit: String,
    salary: String,
    status: String,
    debitHistory: Object,
    transactionHistory: Object}, {collection:"Client"});

module.exports=mongoose.model('UserData', userDataSchema);


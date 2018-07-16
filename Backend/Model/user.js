
class User{

    constructor(email,firstName, lastName, age,password,phone, accountId, currentDebit, salary,status, debitHistory,transactionHistory){

    var users={};
    this.email=email;
    this.firstName= firstName;
    this.lastName=lastName;
    this.age=age;
    this.password=password;
    this.phone=phone;
    this.accountId=accountId;
    this.currentDebit=currentDebit;
    this.salary= salary;
    this.status=status;
    this.debitHistory=debitHistory;
    this.transactionHistory=transactionHistory;
   
    

}
}

module.exports=User
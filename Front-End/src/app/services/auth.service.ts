import { Injectable } from '@angular/core';
 @Injectable({
  providedIn: 'root'
})
export class AuthService {

  data;
  authUser:string;
  constructor() { 
    this.data = {username:"amtassew@mum.edu",password:"pass"}
  }
  login(username:string,password:string){
    if(this.data.username==username.toString() && this.data.password==password){
     
 
       return true;
      
    }
    else return false
  
  }
  getAuth(){
  

    return this.authUser;
  }
  logOUt(){
    this.authUser = undefined;
    // this.logOUt.....
  }
}

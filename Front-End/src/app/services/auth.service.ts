import { Injectable } from '@angular/core';
import {ClientService} from './client.service'
 @Injectable({
  providedIn: 'root'
})
export class AuthService {

  data;
  authUser:string;
  constructor(private clientService:ClientService) { 
    // this.data = clientService.getClients()
 this.data = [{firstName:"Amanuel",lastName:"Tassew",age:12,email:"amanuel.tassew1@gmail.com",password:"123",phone:"123",salary:10000}]
  }
  login(username:string,password:string){
    console.log("dad")
    let temp;
    for(let i=0;i<this.data.length; i++){
    
      if(this.data[i].email==username && this.data[i].password==password){
        
 
        temp= true;
        console.log(temp+"inside if")
        break;
       
     }
     else temp=false;
    
    }
    return temp
  }
  getAuth(){
  

    return this.authUser;
  }
  logOUt(){
    this.authUser = undefined;
    // this.logOUt.....
  }
  register(username,password){
      
  }
}

import { Injectable } from '@angular/core';
import {ClientService} from './client.service'
import { HttpClient } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';
import { Client } from '../model/Client';
 @Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUserToken="";
  authentication
  data;
  authUser:string;
  currentUser:Client = {}
  
  constructor(private clientService:ClientService,private httpClient:HttpClient) { 
    // this.currentUser.firstName="Amanuelll"
    // this.data = clientService.getClients()
 this.data = [{firstName:"Amanuel",lastName:"Tassew",age:12,email:"amanuel.tassew1@gmail.com",password:"123",phone:"123",salary:10000}]
  }
  
  async login(email: string, password: string) { 
    const temp = {
      email:email,
      password:password  
    };
  await this.httpClient.post<any>('http://localhost:5100/login',temp).subscribe(data => {
      let header = new Headers();
      this.authentication=true;
      console.log(this.currentUserToken+"mytoken")

      header.append('Authorization', 'Bearer '+this.currentUserToken)

       // this.httpClient.get("http://localhost:5100/").subscribe(user=>this.currentUser)
   

    this.currentUser.firstName=JSON.stringify(data.user.firstName)
    this.currentUser.lastName=JSON.stringify(data.user.lastName)
    this.currentUser.phone=JSON.stringify(data.user.phone)
    this.currentUser.email=JSON.stringify(data.user.email)
    this.currentUser.age=parseInt( JSON.stringify(data.user.age))
    this.currentUser.salary=parseInt(JSON.stringify(data.user.salary))
    this.currentUser.debit=parseInt(JSON.stringify(data.user.debit))
    this.currentUser.password=JSON.stringify(data.user.password)

    console.log(JSON.stringify(data.user.phone)+"!!!!")

     return this.currentUserToken =JSON.stringify(data.token);
    
   
    },
    err => {
      console.error('Error message:', err.message);
      this.authentication=false;
      
    },
  ()=>{console.log("done!")
   return true}
  );
      await this.sleep(1000) 
}
sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
getToken(){

    return this.currentUserToken;
  }
  logOUt(){
    this.currentUserToken = "";
    // this.logOUt.....
  }
  register(username,password){
      
  }

  
}


import { Injectable } from '@angular/core';
import {ClientService} from './client.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';
import { Client } from '../model/Client';
 @Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUserToken="";
  authentication
  data;
  isLogged:boolean = false;
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
    this.isLogged = true;
    this.authentication=true;
this.currentUser.firstName=JSON.stringify(data.user.firstName)
this.currentUser.lastName=JSON.stringify(data.user.lastName)
this.currentUser.phone=JSON.stringify(data.user.phone)
this.currentUser.email=JSON.stringify(data.user.email)
this.currentUser.age=parseInt( JSON.stringify(data.user.age))
this.currentUser.salary=parseInt(JSON.stringify(data.user.salary))
this.currentUser.debit= JSON.stringify(data.user.currentDebit)
this.currentUser.password=JSON.stringify(data.user.password)
this.currentUser.status=JSON.stringify(data.user.status)

    //   console.log(this.currentUserToken+"mytoken")
    //   console.log("data.token--------->" + data.token);
    // header.set('headers',"data.token");

    // console.log("Header:" + JSON.stringify(header));
    // this.httpClient.get("http://localhost:5100/amanuel.tassew1@gmail.com",{ headers : header})
    //                .subscribe(user=>this.currentUser)
   

 

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
    this.currentUserToken = undefined;
    // this.logOUt.....
  }
  register(username,password){
      
  }

  setIsloggedInFalse(){
    this.isLogged=false;
  }
  getClientbyAccountId(val){

    let header = new HttpHeaders();
    const httpOptions = {headers :new HttpHeaders({ 'Content-Type': 'application/json' })};

   

    // let authToken = localStorage.getItem('auth_token');
let headers = new Headers({ 'Accept': 'application/json' });
// headers.append('Authorization', Bearer ${authToken});


   // return this.httpClient.get('http://localhost:5100/findbyAccountId/'+val)

    let options = {headers :new HttpHeaders({ 'Content-Type': 'application/json', "authorization" : this.getToken() })};

return this.httpClient
  .get('http://localhost:5100/findbyAccountId/'+val,options) 
  }
  
}

// import { Injectable } from '@angular/core';
// import {ClientService} from './client.service'
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Http, Headers, Response } from '@angular/http';
// import { Client } from '../model/Client';
//  @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   currentUserToken="";
//   authentication
//   data;
//   isLogged:boolean = false;
//   authUser:string;
//   currentUser:Client = {}
  
//   constructor(private clientService:ClientService,private httpClient:HttpClient) { 
//     // this.currentUser.firstName="Amanuelll"
//     // this.data = clientService.getClients()
//  this.data = [{firstName:"Amanuel",lastName:"Tassew",age:12,email:"amanuel.tassew1@gmail.com",password:"123",phone:"123",salary:10000}]
//   }
  
//   async login(email: string, password: string) { 
//     const temp = {
//       email:email,
//       password:password  
//     };
//   await this.httpClient.post<any>('http://localhost:9898/login',temp).subscribe(data => {
//     this.isLogged = true;
//     this.authentication=true;
// this.currentUser.firstName=JSON.stringify(data.user.firstName)
// this.currentUser.lastName=JSON.stringify(data.user.lastName)
// this.currentUser.phone=JSON.stringify(data.user.phone)
// this.currentUser.email=JSON.stringify(data.user.email)
// this.currentUser.age=parseInt( JSON.stringify(data.user.age))
// this.currentUser.salary=parseInt(JSON.stringify(data.user.salary))
// this.currentUser.debit= JSON.stringify(data.user.currentDebit)
// this.currentUser.password=JSON.stringify(data.user.password)
// this.currentUser.status=JSON.stringify(data.user.status)

//     //   console.log(this.currentUserToken+"mytoken")
//     //   console.log("data.token--------->" + data.token);
//     // header.set('headers',"data.token");

//     // console.log("Header:" + JSON.stringify(header));
//     // this.httpClient.get("http://localhost:5100/amanuel.tassew1@gmail.com",{ headers : header})
//     //                .subscribe(user=>this.currentUser)
   

 

//     console.log(JSON.stringify(data.user.phone)+"!!!!")

//      return this.currentUserToken =JSON.stringify(data.token);
    
   
//     },
//     err => {
//       console.error('Error message:', err.message);
//       this.authentication=false;
      
//     },
//   ()=>{console.log("done!")
//    return true}
//   );
//       await this.sleep(1000) 
// }
// sleep(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
//    getToken(){
//     return this.currentUserToken;
//   }
//   logOUt(){
//     this.currentUserToken = undefined;
//     // this.logOUt.....
//   }
//   register(username,password){
      
//   }

//   setIsloggedInFalse(){
//     this.isLogged=false;
//   }
//   getClientbyAccountId(val){

//     let header = new HttpHeaders();
//     const httpOptions = {headers :new HttpHeaders({ 'Content-Type': 'application/json' })};

   

//     // let authToken = localStorage.getItem('auth_token');
// let headers = new Headers({ 'Accept': 'application/json' });
// // headers.append('Authorization', `Bearer ${authToken}`);


//    // return this.httpClient.get('http://localhost:5100/findbyAccountId/'+val)

//     let options = {headers :new HttpHeaders({ 'Content-Type': 'application/json', "authorization" : this.getToken() })};

// return this.httpClient
//   .get('http://localhost:9898/findbyAccountId/'+val,options) 
//   }
  
// }

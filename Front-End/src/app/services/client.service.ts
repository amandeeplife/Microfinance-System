import { Injectable } from '@angular/core';
import {ClientsComponent} from '../components/clients/clients.component'
import { Client } from '../model/Client';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';
import { AuthService } from './auth.service';
  
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  token;
    clients:Client[];
    client:Client;
    id:number=0;
    currentUserToken;
    clientsComponent:ClientsComponent;
  constructor(private httpClient:HttpClient) {
   
    this.clients = []
    
   }
   registerClient(){

   }
  newClient(val:Client){
 const obj = {
  email: val.email,
  firstName: val.firstName,
  age:val.age,
  password:val.password,
  phone:val.phone,
  currentDebit:val.debit,


};

 
    this.httpClient.post('http://localhost:5100/signup',  obj)
    .subscribe(data => {
      console.log(data);
    },
    err => {
      console.error('Oops:', err.message);
    },
  ()=>console.log("done!")
  );


 
  }



  getClients(){

    return this.httpClient.get('http://localhost:5100/users');
  }
    headers = new Headers();

  setStatus(id){
    let obj={accountId:id}
   return this.httpClient.post('http://localhost:5100/client', obj).subscribe(data=>console.log(data))
  }  
  getClient(val){
    return this.httpClient.get('http://localhost:5100/')
      }
 
  updateClient(currentClient){
    // this.client = this.getClient(currentClient.id);
      this.clientsComponent.getTotalOwed()
    // this.client = currentClient;


  }
}


// import { Injectable } from '@angular/core';
// import {ClientsComponent} from '../components/clients/clients.component'
// import { Client } from '../model/Client';
// import { HttpClient ,HttpHeaders} from '@angular/common/http';
// import { Http, Headers, Response } from '@angular/http';
// import { AuthService } from './auth.service';
  
// @Injectable({
//   providedIn: 'root'
// })
// export class ClientService {
//   token;
//     clients:Client[];
//     client:Client;
//     id:number=0;
//     currentUserToken;
//     clientsComponent:ClientsComponent;
//   constructor(private httpClient:HttpClient) {
   
//     this.clients = []
    
//    }
//    registerClient(){

//    }
//   newClient(val:Client){
//  const obj = {
//   email: val.email,
//   firstName: val.firstName,
//   age:val.age,
//   password:val.password,
//   phone:val.phone,
//   currentDebit:val.debit,


// };

 
//     this.httpClient.post('http://localhost:9898/api/signup',  obj)
//     .subscribe(data => {
//       console.log(data);
//     },
//     err => {
//       console.error('Oops:', err.message);
//     },
//   ()=>console.log("done!")
//   );


 
//   }



//   getClients(){

//     return this.httpClient.get('http://localhost:9898/api/users');
//   }
//     headers = new Headers();

//   setStatus(id){
//     let obj={accountId:id}
//    return this.httpClient.post('http://localhost:9898/client', obj).subscribe(data=>console.log(data))
//   }  
//   getClient(val){
//     return this.httpClient.get('http://localhost:9898/')
//       }
 
//   updateClient(currentClient){
//     // this.client = this.getClient(currentClient.id);
//       this.clientsComponent.getTotalOwed()
//     // this.client = currentClient;


//   }
// }

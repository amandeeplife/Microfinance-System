import { Injectable } from '@angular/core';
import {ClientsComponent} from '../components/clients/clients.component'
import { Client } from '../model/Client';
import { HttpClient } from '@angular/common/http';
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

    return [{id:"1",firstName:"Amanuel",lastName:"Tassew",age:12,email:"amanuel.tassew1@gmail.com",password:"123",phone:"123",salary:10000,debit:111}]
  }
    headers = new Headers();
  getClient(val){
    return this.httpClient.get('http://localhost:5100/')
      }
  updateClient(currentClient){
    // this.client = this.getClient(currentClient.id);
      this.clientsComponent.getTotalOwed()
    // this.client = currentClient;


  }
}

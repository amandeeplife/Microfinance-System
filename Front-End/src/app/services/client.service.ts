import { Injectable } from '@angular/core';
import {ClientsComponent} from '../components/clients/clients.component'
import { Client } from '../model/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

    clients:Client[];
    client:Client;
    id:number=0;
    clientsComponent:ClientsComponent;
  constructor() {

    this.clients = []
    
   }
  newClient(val){
    val.id=++this.id;
    this.clients.push(val)
    console.log(this.clients)
  }
  getClients(){

    return [{id:"1",firstName:"Amanuel",lastName:"Tassew",age:12,email:"amanuel.tassew1@gmail.com",password:"123",phone:"123",salary:10000,debit:111}]
  }
  getClient(val){
   
    for (let i=0; i<this.clients.length; i++){
      if(this.clients[i].id==val){
        this.client = this.clients[i]
      }
    }

    return {id:"1",firstName:"Amanuel",lastName:"Tassew",age:12,email:"amanuel.tassew1@gmail.com",password:"123",phone:"123",salary:10000,debit:111,status:"pending"}
  }
  updateClient(currentClient){
    this.client = this.getClient(currentClient.id);
      this.clientsComponent.getTotalOwed()
    this.client = currentClient;


  }
}

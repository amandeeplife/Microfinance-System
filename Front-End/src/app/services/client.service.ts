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
  }
  getClients(){

    return this.clients
  }
  getClient(val){
   
    for (let i=0; i<this.clients.length; i++){
      if(this.clients[i].id==val){
        this.client = this.clients[i]
      }
    }

    return this.client
  }
  updateClient(currentClient){
    this.client = this.getClient(currentClient.id);
      this.clientsComponent.getTotalOwed()
    this.client = currentClient;
  }
  deletClient(curretClinetedTobDeleted){
   
    
    }
}

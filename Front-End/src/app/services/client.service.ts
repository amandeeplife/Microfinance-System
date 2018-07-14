import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients;
    client;
    id:number=0;
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
}

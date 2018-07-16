import { Injectable } from '@angular/core';
import {ClientsComponent} from '../components/clients/clients.component'
import { Client } from '../model/Client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

    clients:Client[];
    client:Client;
    id:number=0;
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






    this.httpClient.post('http://localhost:9898/signup',  obj)
    .subscribe(data => {
      console.log(data);
    },
    err => {
      console.error('Oops:', err.message);
    },
  ()=>console.log("done!")
  );


    // val.id=++this.id;
    this.clients.push(val)
    console.log(this.clients)
  }


  login(username: string, password: string) {
    return this.http.post<any>('/api/authenticate', { username: username, password: password })
        .map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }

            return user;
        });
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

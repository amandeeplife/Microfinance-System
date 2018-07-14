import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClients(){

    return [{id:"1",firstName:"Amanule",lastName:"Mulat",email:"aman@gmail.om",balance:1200},{id:"2" ,firstName:"Alex",lastName:"Andria",balance:1000}];
  }
}

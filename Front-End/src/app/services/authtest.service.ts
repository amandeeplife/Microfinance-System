import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
 @Injectable({
  providedIn: 'root'
})
export class AuthtestService {

  constructor(private http:HttpClient) {  }
  addBookWithPromise(val){
    return this.http.post('/users',val)
  }
}

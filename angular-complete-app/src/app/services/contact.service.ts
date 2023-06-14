import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { contact } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
//to use httpClient we need to inject HttpClient 
  constructor(private http:HttpClient) { }

  getContacts():Observable<any>{
     return this.http.get("http://localhost:4500/contacts")   
  }
}

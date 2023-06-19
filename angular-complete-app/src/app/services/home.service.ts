import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  httpOptions: any
  constructor(private http: HttpClient) { }

  getServices(): Observable<any> {
    return this.http.get("http://localhost:4500/services")
  }

  getDetails(id: number): Observable<any> {
    return this.http.get("http://localhost:4500/details/" + id)
  }

  getService(id: number): Observable<any> {
    return this.http.get("http://localhost:4500/services/" + id)
  }

  postEnquiry(obj:any,fflag:boolean):Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    if(!fflag)
      return this.http.post("http://localhost:5600/api/enquiries",obj,this.httpOptions)
    return this.http.post("http://localhost:5600/api/enquiries",obj)
  }
}

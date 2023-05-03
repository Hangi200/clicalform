import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChildRegistrationService {

  url:string = "http://localhost:8080/child";
  urlList:string = "http://localhost:8080/child";

  constructor(private http:HttpClient) { }

  registerChild(data:any) {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
    return this.http.post(this.url, data, { headers });
  }

  getChildList() {
    return this.http.get(this.urlList);
  }

}

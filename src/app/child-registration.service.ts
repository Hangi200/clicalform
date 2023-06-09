import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChildRegistrationService {

  url:string = "http://localhost:8080/child";
  urlList:string = "http://localhost:8080/child";
  immuneUrl = "http://localhost:8080/immunization";
  getImmuneListUrl = "http://localhost:8080/immunization/child/";

  constructor(private http:HttpClient) { }

  registerChild(data:any) {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
    return this.http.post(this.url, data, { headers });
  }

  getChildList() {
    return this.http.get(this.urlList);
  }

  registerImmune(data:any) {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
    return this.http.post(this.immuneUrl, data, { headers });
  }

  getImmuneList() {
    return this.http.get(this.immuneUrl);
  }

  registerMedication(data:any) {
    let childString:any = localStorage.getItem('child');
    var medicationUrl = "http://localhost:8080/medication/" + JSON.parse(childString).regNo;
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
    return this.http.post(medicationUrl, data, { headers });
  }

  searchChild(name:string) {
    let searchUrl = "http://localhost:8080/child/name/" + name;
    return this.http.get(searchUrl);
  }

  getImmunesList(id:any) {
    return this.http.get(this.getImmuneListUrl + id);
  }

  getMedications(id:any) {
    var medicationUrl = "http://localhost:8080/medication/child/";
    return this.http.get(medicationUrl + id);
  }

}

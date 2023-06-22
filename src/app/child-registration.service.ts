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

  registerImmune(data:any) {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
    let immuneUrl = "http://localhost:8080/immunization";
    return this.http.post(immuneUrl, data, { headers });
  }

  getImmuneList() {
    let immuneUrl = "http://localhost:8080/immunization";
    return this.http.get(immuneUrl);
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
    let getImmuneListUrl = "http://localhost:8080/immunization/child/";
    return this.http.get(getImmuneListUrl + id);
  }

  getMedications(id:any) {
    var medicationUrl = "http://localhost:8080/medication/child/";
    return this.http.get(medicationUrl + id);
  }

  getGrowthDevelopment(id:any) {
    var devUrl = "http://localhost:8080/growth/child/" + id;
    return this.http.get(devUrl);
  }

  saveGrowthDevelopment(data:any, id:any) {
    var devUrl = "http://localhost:8080/growth/child/" + id;
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });
    return this.http.post(devUrl, data, {headers});
  }

}

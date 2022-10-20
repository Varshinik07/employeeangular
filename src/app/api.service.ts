import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewemployee=()=>{
    return this.http.get("http://localhost:8080/viewemployee")
  }
  addemployee=(data:any)=>{
    return this.http.post("http://localhost:8080/addemployee",data)
  }
  deleteemployee=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteemployee",data)
  }
  serachemployee=(data:any)=>{
    return this.http.post("http://localhost:8080/searchemployee",data)
  }
  
  }


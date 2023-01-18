import { Injectable,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService implements OnInit {

  constructor(private http:HttpClient) { }

public GetSpecificCateory(url:string):Observable<any[]>{
  return this.http.get<any[]>(url);
}

public GetProduct(url:string):Observable<any>{
  return this.http.get<any>(url);

}
public GetCustomers():Observable<any[]>{
  return this.http.get<any[]>("http://localhost:3000/customers") 

  
}

  ngOnInit(): void {
    
  }
}

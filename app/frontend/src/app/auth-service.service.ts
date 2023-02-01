import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import  {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }
  login(data:any):Observable<any>{
    console.log(data);
    
    return this.http.post(`${environment.apiUrl}/login`, data)
  }

  cadastro(data:any):Observable<any>{
    console.log(data);
    
    return this.http.post(`${environment.apiUrl}/cadastro`, data)
  }

  cep(cep:any):Observable<any>{
    
    return this.http.get(`//viacep.com.br/ws/${cep}/json`)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {UsoCauIn,LisUsoCauIn} from '../interfaces/uso-cau-in';


@Injectable({
  providedIn: 'root'
})
export class UsuCuaService {
  private urlapi:string = "http://localhost:8080/uc";
  constructor(private http: HttpClient) { }

  //return json 
  getUsCau(){
    return this.http.get(this.urlapi);
  }

  // reading full response
  getUsCauHeaders(): Observable<HttpResponse<LisUsoCauIn>>{
    return this.http.get<LisUsoCauIn>(this.urlapi,{observe:'response'});
  }
}

import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PartService {
  private apiServer = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }


  public getParts(): Observable<any>{
    return this.http.get<any>(`${this.apiServer}/all`)
  }
}

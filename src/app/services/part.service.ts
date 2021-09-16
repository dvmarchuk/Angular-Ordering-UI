import {Injectable, Input} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PartService {
  private apiServer = environment.apiBaseUrl;
  private apiPartsTechBaseUrl = environment.apiPartsTechBaseUrl;

  public vinNum = "";
  private vinNumShared = new BehaviorSubject<any>(this.vinNum)
  currentMessage = this.vinNumShared.asObservable();



  constructor(private http:HttpClient) { }


  public getParts(): Observable<any>{
    return this.http.get<any>(`${this.apiServer}/all`)
  }

  public callVin(vin: String): Observable<any>{
    this.vinNumShared.next(vin)
    // console.log("inside call vin " + vin);
    return this.http.get<any>(`${this.apiPartsTechBaseUrl}/catalog/vin/${this.vinNum}`)//make into post request and add body and options
  }
}

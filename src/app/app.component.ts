import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {BehaviorSubject} from "rxjs";
import {PartService} from "./services/part.service";
import {Part} from "./part";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: any[] = [];
  parts: Part[] = [];
  vinNum: String = '';


  constructor(private httpClient: HttpClient, private partService: PartService) {

  }

  ngOnInit(): void {
    this.httpClient.get<any[]>('http://localhost:8080/users').subscribe(value => this.title = value);
    this.getParts();
    this.partService.currentMessage.subscribe(vin => this.vinNum = vin);
    //this.getApiAuth();
  }

  public getParts(): void{
    this.partService.getParts().subscribe(
      (response: Part[]) =>{
        this.parts = response;
      },(error:HttpErrorResponse) => {
        console.log(error.message);
      }
    )
  }

  callVin() {
    //this.partService.currentMessage.subscribe(vin => this.vinNum = vin)
    this.partService.callVin(this.vinNum);
   // this.partService.currentMessage.subscribe();
    console.log(this.vinNum)
    if(this.vinNum.length == 17){
      //allow api call to happen
    }
    this.vinNum = "";
  }


  // getApiAuth() {
  //   const headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json');
  //
  //   const options = {headers: {'Content-Type': 'application/json'}};
  //
  //   const settings = {
  //       accessType: "user",
  //       credentials: {
  //         user: {
  //           id: "demo_vaautosales",
  //           key: "1c82778be5a549229e5189ced4cc65d0"
  //         },
  //         partner: {
  //           id: "vaautosales_beta",
  //           key: "0389ba8a09314b9d964498bfba63a016"
  //         }
  //       }
  //   };
  //
  //   //this.httpClient.post()
  //   this.httpClient.post('https://api.partstech.com/oauth/access', JSON.stringify(settings)).subscribe(value => console.log(value));
  // }



}

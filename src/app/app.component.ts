import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //title = 'Ordering';
  //user: any[] = [];
  // @ts-ignore
  title: any[];

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.httpClient.get<any[]>('http://localhost:8080/users').subscribe(value => this.title = value);
  }

  // @ts-ignore
  // order(itemId):void{
  //   console.log("this is order");
  //   //this.httpClient.post<any>('http://localhost:8080/order', {itemId} )
  // }
}

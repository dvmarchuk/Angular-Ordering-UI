import {Component, Input, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";

import {PhotoButtonComponent} from "../button/photo-button/photo-button.component";
import {AppComponent} from "../../app.component";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  // @ts-ignore
  @Input() text1: String;

  // @ts-ignore
  @Input() text2: String;

  // @ts-ignore
  @Input() showOptions: boolean = false;

  // @ts-ignore
  title: any[];


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  submit() {
    this.showOptions = false;
    this.order(1);
    //capture info and submit request
  }

  // @ts-ignore
  order(itemId):void{
    console.log("this is order " + itemId);
    this.httpClient.get<any[]>('http://localhost:8080/users').subscribe(value => this.title = value);
    //this.httpClient.post<any>('http://localhost:8080/order', {itemId} )
  }
}

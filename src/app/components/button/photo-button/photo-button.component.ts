import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-photo-button',
  templateUrl: './photo-button.component.html',
  styleUrls: ['./photo-button.component.css']
})
export class PhotoButtonComponent implements OnInit {
  // @ts-ignore
  showOpt: boolean = false;

  // @ts-ignore
  @Input() text: String;

  // @ts-ignore
  @Input() imgSource: String;

  // @ts-ignore
  @Input() option1: String;

  // @ts-ignore
  @Input() text2: String;


  constructor() { }

  ngOnInit(): void {
  }

  toggleChild() {
    this.showOpt = !this.showOpt;
  }
}

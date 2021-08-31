import {Component, Input, OnInit} from '@angular/core';
import {PhotoButtonComponent} from "../button/photo-button/photo-button.component";

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

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.showOptions = false;
  }
}

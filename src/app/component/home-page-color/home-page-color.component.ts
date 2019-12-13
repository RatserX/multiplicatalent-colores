import { Component, OnInit, Input } from '@angular/core';
import { Color } from 'src/app/model/color';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home-page-color',
  templateUrl: './home-page-color.component.html',
  styleUrls: ['./home-page-color.component.scss'],
  animations: [
    trigger('enterLeave', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate(500, style({
          opacity: 1
        }))
      ])
    ])
  ]
})
export class HomePageColorComponent implements OnInit {
  
  @Input()
  color: Color;

  isClicked: boolean;

  constructor() { }

  ngOnInit() {
    this.isClicked = false;
  }

  public onColorSelect(color: Color) {
    this.isClicked = true;

    setTimeout(() => {
      this.isClicked = false;
    }, 750);
  }

}

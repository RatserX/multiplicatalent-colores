import { Component, OnInit, Input } from '@angular/core';
import { Color } from 'src/app/model/color';

@Component({
  selector: 'app-home-page-color',
  templateUrl: './home-page-color.component.html',
  styleUrls: ['./home-page-color.component.scss']
})
export class HomePageColorComponent implements OnInit {
  
  @Input()
  color: Color;

  constructor() { }

  ngOnInit() {
  }

  public onColorSelect(color: Color) {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Color } from 'src/app/model/color';

@Component({
  selector: 'app-index-page-color',
  templateUrl: './index-page-color.component.html',
  styleUrls: ['./index-page-color.component.scss']
})
export class IndexPageColorComponent implements OnInit {
  
  @Input() color: Color

  constructor() { }

  ngOnInit() {
  }

  public onClick(color: Color)
  {
    
  }

}

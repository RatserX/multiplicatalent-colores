import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/model/page';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {
  
  @Input() page: Page;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public pageNumber: number;

  constructor() {
    this.pageNumber = environment.page.minNumber;
  }

  ngOnInit() {
  }

}

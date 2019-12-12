import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pageNumber: number;

  constructor() {
  }

  ngOnInit() {
    this.pageNumber = environment.page.minNumber;
  }
  
  onNextPage() {
    if (this.pageNumber < environment.page.maxNumber) {
      this.pageNumber++;
    }
  }
  
  onPreviousPage() {
    if (this.pageNumber > environment.page.minNumber) {
      this.pageNumber--;
    }
  }

}

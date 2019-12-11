import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/model/page';
import { ColorService } from 'src/app/service/color.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {
  
  page: Page;

  constructor(private colorService : ColorService) { }

  ngOnInit() {
    this.colorService.getPagedColors().subscribe((data) => {
      console.log(data);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/service/color.service';
import { Page } from 'src/app/model/page';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  private pages: Page[];
  public selectedPage: Page;

  constructor(private colorService : ColorService) { }

  ngOnInit() {
    this.colorService.getPagedColors().subscribe((data) => {
      console.log(data);
    })
  }

}

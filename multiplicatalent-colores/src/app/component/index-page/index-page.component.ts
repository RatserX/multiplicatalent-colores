import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/model/page';
import { ColorService } from 'src/app/service/color.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {
  
  @Input() pageNumber: number;
  public page: Page;

  constructor(private colorService : ColorService) { }

  ngOnInit() {
    this.colorService.getPagedColors(this.pageNumber).subscribe((x: Page) => {
      this.page = x;
    });
  }

}

import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Page } from 'src/app/model/page';
import { ColorService } from 'src/app/service/color.service';
import { Subscription } from 'rxjs';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  @Input()
  pageNumber: number;

  private pagedColorsSubscription: Subscription;
  page: Page;

  constructor(private colorService : ColorService, private ngxUiLoaderService: NgxUiLoaderService) {
  }

  ngOnInit() {
    this.subscribePagedColors(this.pageNumber);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.subscribePagedColors(this.pageNumber);
  }

  ngOnDestroy() {
    this.pagedColorsSubscription.unsubscribe();
  }
  
  subscribePagedColors(pageNumber: number) {
    if (pageNumber === null) {
      return;
    }

    this.ngxUiLoaderService.startLoader("grid-loader");
    this.pagedColorsSubscription = this.colorService
      .getPagedColors(pageNumber)
      .subscribe(
        (value: Page) => {
          this.page = value;
        },
        (error: any) => {
          console.error(error);
        },
        () => {
          this.ngxUiLoaderService.stopLoader("grid-loader");
        }
      );
  }

}

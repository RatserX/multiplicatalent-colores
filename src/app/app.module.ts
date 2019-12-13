import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxUiLoaderModule, NgxUiLoaderConfig } from 'ngx-ui-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { HomePageColorComponent } from './component/home-page-color/home-page-color.component';
import { ClipboardDirective } from './directive/clipboard.directive';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "#444444",
  "bgsOpacity": 0.5,
  "bgsPosition": "center-center",
  "bgsSize": 60,
  "bgsType": "ball-scale-multiple",
  "blur": 5,
  "delay": 0,
  "fgsColor": "#FFF6F6",
  "fgsPosition": "center-center",
  "fgsSize": 60,
  "fgsType": "ball-scale-multiple",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "10px",
  "overlayColor": "rgba(40, 40, 40, 0.8)",
  "pbColor": "red",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": false,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 300
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomePageComponent,
    HomePageColorComponent,
    ClipboardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }

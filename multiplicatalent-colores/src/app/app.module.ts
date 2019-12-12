import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { HomePageColorComponent } from './component/home-page-color/home-page-color.component';
import { ClipboardDirective } from './directive/clipboard.directive';

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

    HttpClientModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }

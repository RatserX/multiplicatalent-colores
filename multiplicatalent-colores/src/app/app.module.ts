import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './component/index/index.component';
import { IndexPageComponent } from './component/index-page/index-page.component';
import { IndexPageColorComponent } from './component/index-page-color/index-page-color.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    IndexPageComponent,
    IndexPageColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }

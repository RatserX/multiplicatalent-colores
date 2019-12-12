import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient: HttpClient) { }

  public getPagedColors(pageNumber?: number) {
    return this.httpClient.get(`${environment.api.url}/colors?page=${pageNumber}`);
  }
}

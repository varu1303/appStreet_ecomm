import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ListService {

  url = 'https://assignment-appstreet.herokuapp.com/api/v1/products?page=';

  constructor(private http: HttpClient) { }

  getProductsByPage(pageNo: string): any {
    return this.http.get(`${this.url}${pageNo}`);
  }

}

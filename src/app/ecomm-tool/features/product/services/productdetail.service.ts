import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductdetailService {

  url = 'https://assignment-appstreet.herokuapp.com/api/v1/products/';
  constructor(private http: HttpClient) { }

  getOneProduct(id: string): any {
    return this.http.get(`${this.url}${id}`);
  }

}

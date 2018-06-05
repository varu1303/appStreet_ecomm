import { Component, OnInit } from '@angular/core';

import { ListService } from './../services/list-service.service';

@Component({
  selector: 'app-productsview',
  templateUrl: './productsview.component.html',
  styleUrls: ['./productsview.component.css']
})
export class ProductsviewComponent implements OnInit {

  page: any;
  productSets = {};

  constructor(private callTo: ListService) { }

  ngOnInit() {
    if (sessionStorage.getItem('currentPageNo')) {
      this.page = sessionStorage.getItem('currentPageNo');
      let p = this.page;
      while (p) {
        this.getProductsToList(p);
        p -= 1;
      }
    }else {
      sessionStorage.setItem('currentPageNo', '1');
      this.page = '1';
      this.getProductsToList('1');
    }
  }

  getProductsToList(pageNo) {
    // console.log(pageNo);
    this.callTo.getProductsByPage(pageNo)
      .subscribe(
        data => {
          this.productSets[pageNo] = data.products;
          // console.log(this.productSets)
          if (sessionStorage.getItem('SCROLL_POSITION') && parseInt(sessionStorage.getItem('SCROLL_POSITION')) > window.scrollY) {
            setTimeout(() => {
              window.scrollTo(0, parseInt(sessionStorage.getItem('SCROLL_POSITION')));
            })
          }
        },
        error => {
          console.log(error);
        }
      )
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }

  loadNextPage() {
    this.page -= (-1);
    sessionStorage.setItem('currentPageNo', this.page);
    this.getProductsToList(this.page);
  }

}

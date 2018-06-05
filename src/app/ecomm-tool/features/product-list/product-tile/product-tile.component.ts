import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

interface details {
  images: Array<string>;
  name: string;
  sale_price: any;
  _id: any;
}

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.css']
})
export class ProductTileComponent implements OnInit {


  @Input() product: Array<details>;

  constructor(private router: Router) { 
  //   this.product = [{
  //   name: '',
  //   images: [],
  //   sale_price: 0,
  //   _id: ''
  // }]
  }

  ngOnInit() {
  }

  goToProductPage(prodId) {
    sessionStorage.setItem('SCROLL_POSITION', window.scrollY.toString());
    this.router.navigateByUrl(`/product/${prodId}`);
  }

}

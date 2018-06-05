import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.css']
})
export class ProductTileComponent implements OnInit {

  @Input() product: Array<{
    images: any,
    sale_price: any,
    name: any,
    _id: any
  }>;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToProductPage(prodId) {
    sessionStorage.setItem('SCROLL_POSITION', window.scrollY.toString());
    this.router.navigateByUrl(`/product/${prodId}`);
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsviewComponent } from './productsview/productsview.component';
import { ProductTileComponent } from './product-tile/product-tile.component';

import { ListService } from './services/list-service.service';
import { LoadmoreComponent } from './loadmore/loadmore.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductsviewComponent, ProductTileComponent, LoadmoreComponent],
  providers: [ListService]
})
export class ProductListModule { }

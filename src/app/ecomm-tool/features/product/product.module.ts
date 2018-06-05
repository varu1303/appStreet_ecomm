import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductdetailService } from './services/productdetail.service';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductAttributeComponent } from './product-attribute/product-attribute.component';
import { ProductSnapsComponent } from './common/product-snaps/product-snaps.component';
import { DescTextPipe } from './common/desc-text.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductPageComponent, ProductImageComponent, ProductAttributeComponent, ProductSnapsComponent, DescTextPipe],
  providers: [ProductdetailService]
})
export class ProductModule { }

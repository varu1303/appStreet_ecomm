import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './ecomm-tool/core/core.module';
import { ProductModule } from './ecomm-tool/features/product/product.module';
import { ProductListModule } from './ecomm-tool/features/product-list/product-list.module';
import { SharedModule } from './ecomm-tool/shared/shared.module';

import { AppComponent } from './app.component';
import { ProductsviewComponent } from './ecomm-tool/features/product-list/productsview/productsview.component';
import { ProductPageComponent } from './ecomm-tool/features/product/product-page/product-page.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: ProductsviewComponent },
  { path: 'product/:id',      component: ProductPageComponent},
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    ProductModule,
    ProductListModule,
    SharedModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

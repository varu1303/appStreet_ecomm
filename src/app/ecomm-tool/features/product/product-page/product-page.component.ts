import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductdetailService } from './../services/productdetail.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit, OnDestroy {

  private sub: any;
  private product = {
    images: []
  };
  private attributes: Array<any>;
  private options: Array<any>;
  private currentProduct = {};
  private selectedIds: Array<any>;
  private variation: Array<any>;
  private quantity = 1;
  public showCompDesc = false;

  constructor(private route: ActivatedRoute, private callTo: ProductdetailService, private router: Router) { 
  }

  ngOnInit() {
    let variationArray = [];

    this.sub = this.route.params.subscribe(params => {

      // Page refresh workaround
      if (!this.variation) {
        sessionStorage.removeItem('VARIATION')
      }

      // Not making call to server if switching between product_variation
      if (sessionStorage.getItem('VARIATION') && JSON.parse(sessionStorage.getItem('VARIATION')).variation.indexOf(params['id']) > -1) {
        this.variation.forEach(product => {
          let found = true;
          product.sign.forEach(v => {
            if (this.selectedIds.indexOf(v) < 0)
              found = false;
          })
          if (found) {
           this.currentProduct = product;
          }
        })   
      }else {        
        if (sessionStorage.getItem('VARIATION')) {
          sessionStorage.removeItem('VARIATION')
        }
        this.callTo.getOneProduct(params['id'])
        .subscribe(
          data => {
            this.product = data.primary_product;
            this.attributes = data.attributes;
            this.options = data.options;
            this.selectedIds = data.selected_option_ids;
            this.variation = data.product_variations;
            this.variation.forEach(product => {
              variationArray.push(product._id);
              let found = true;
              product.sign.forEach(v => {
                if (this.selectedIds.indexOf(v) < 0)
                  found = false;
              })
              if (found) {
               this.currentProduct = product;
              }
            })
            sessionStorage.setItem('VARIATION', JSON.stringify({variation: variationArray}));              
            // console.log(data);
          },
          error => {
            console.log(error);
          }
        )
      }
   });
 }

 getAttrOpts(aId) {
   let optArray = [];
   this.options.forEach(opt => {
     if (opt.attrib_id === aId)
      optArray.push(opt);
   })
   return optArray;
 }

 getSelectedId(aId) {
   return this.options.filter(opt => {
    if (opt.attrib_id === aId && this.selectedIds.indexOf(opt._id) > -1)
      return opt._id;
  })[0]._id;
 }

 pickFromVariation(event) {

  let index = this.selectedIds.indexOf(event.oldId);
  this.selectedIds.splice(index, 1, event.newId);

  let found;
  this.variation.forEach(product => {
    found = true;
    product.sign.forEach(v => {
      if (this.selectedIds.indexOf(v) < 0)
        found = false;
    })
    if (found) {
     this.router.navigateByUrl(`/product/${product._id}`)
    }
  })
 }

 changeQuantity(inc) {
   if (inc) {
     this.quantity += 1;
   }else if (this.quantity > 1) {
     this.quantity -= 1;
   }
 }

 ngOnDestroy() {
   this.sub.unsubscribe();
   sessionStorage.removeItem('VARIATION')
 }

}

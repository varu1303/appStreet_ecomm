import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {

  @Input() imgLink: Array<any>;
  private inFocus = 0;

  constructor() { }

  ngOnInit() {
  }

  changeInFocus(index) {
    this.inFocus = index;
  }

  incInFocus()  {
    if (this.inFocus === (this.imgLink.length -1))
      this.inFocus = 0;
    else
      this.inFocus += 1;
  }

  decInFocus() {
    if (this.inFocus === 0)
      this.inFocus = (this.imgLink.length -1);
    else
      this.inFocus -= 1;
  }

}

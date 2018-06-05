import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-attribute',
  templateUrl: './product-attribute.component.html',
  styleUrls: ['./product-attribute.component.css']
})
export class ProductAttributeComponent implements OnInit {

  @Input() name: string;
  @Input() options: Array<any>;
  @Input() selectedId: string;

  @Output() newOption = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  changeSelectedOption(optId) {
    if (optId !== this.selectedId) {
      this.newOption.emit({newId: optId, oldId: this.selectedId});
    }
  }

}

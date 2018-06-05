import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-snaps',
  templateUrl: './product-snaps.component.html',
  styleUrls: ['./product-snaps.component.css']
})
export class ProductSnapsComponent implements OnInit {

  @Input() link: string;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, HostListener, ElementRef, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-loadmore',
  templateUrl: './loadmore.component.html',
  styleUrls: ['./loadmore.component.css']
})
export class LoadmoreComponent implements OnInit {

  @Output() loadNextPage = new EventEmitter();

  constructor(public el: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    // console.log(scrollPosition);
    // console.log(componentPosition);
    // console.log(window.innerHeight)
    if ((window.innerHeight + window.scrollY) >= componentPosition) {
      this.loadNextPage.emit(true);
    } 
    // else {
    //   console.log('ABOVE')
    // }

  }

  emitLoad() {
    this.loadNextPage.emit(true);
  }

}

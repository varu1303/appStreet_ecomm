import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSnapsComponent } from './product-snaps.component';

describe('ProductSnapsComponent', () => {
  let component: ProductSnapsComponent;
  let fixture: ComponentFixture<ProductSnapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSnapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSnapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

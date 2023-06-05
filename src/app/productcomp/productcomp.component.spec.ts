import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcompComponent } from './productcomp.component';

describe('ProductcompComponent', () => {
  let component: ProductcompComponent;
  let fixture: ComponentFixture<ProductcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductcompComponent]
    });
    fixture = TestBed.createComponent(ProductcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

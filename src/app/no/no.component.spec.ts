import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoComponent } from './no.component';

describe('NoComponent', () => {
  let component: NoComponent;
  let fixture: ComponentFixture<NoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoComponent]
    });
    fixture = TestBed.createComponent(NoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

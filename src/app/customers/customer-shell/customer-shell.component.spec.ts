import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerShellComponent } from './customer-shell.component';

describe('CustomerShellComponent', () => {
  let component: CustomerShellComponent;
  let fixture: ComponentFixture<CustomerShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

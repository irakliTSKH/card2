import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelChangeComponent } from './fuel-change.component';

describe('FuelChangeComponent', () => {
  let component: FuelChangeComponent;
  let fixture: ComponentFixture<FuelChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuelChangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuelChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

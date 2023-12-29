import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenDivsComponent } from './hidden-divs.component';

describe('HiddenDivsComponent', () => {
  let component: HiddenDivsComponent;
  let fixture: ComponentFixture<HiddenDivsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiddenDivsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HiddenDivsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCardComponent } from './change-card.component';

describe('ChangeCardComponent', () => {
  let component: ChangeCardComponent;
  let fixture: ComponentFixture<ChangeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

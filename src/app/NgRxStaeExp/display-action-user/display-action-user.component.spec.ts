import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayActionUserComponent } from './display-action-user.component';

describe('DisplayActionUserComponent', () => {
  let component: DisplayActionUserComponent;
  let fixture: ComponentFixture<DisplayActionUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayActionUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayActionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

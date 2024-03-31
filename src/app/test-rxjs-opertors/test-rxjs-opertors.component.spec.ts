import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRxjsOpertorsComponent } from './test-rxjs-opertors.component';

describe('TestRxjsOpertorsComponent', () => {
  let component: TestRxjsOpertorsComponent;
  let fixture: ComponentFixture<TestRxjsOpertorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestRxjsOpertorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestRxjsOpertorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

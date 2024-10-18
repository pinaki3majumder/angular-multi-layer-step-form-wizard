import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubStepFormComponent } from './sub-step-form.component';

describe('SubStepFormComponent', () => {
  let component: SubStepFormComponent;
  let fixture: ComponentFixture<SubStepFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubStepFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubStepFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

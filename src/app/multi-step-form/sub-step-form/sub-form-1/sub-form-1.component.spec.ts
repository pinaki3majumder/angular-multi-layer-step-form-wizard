import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubForm1Component } from './sub-form-1.component';

describe('SubForm1Component', () => {
  let component: SubForm1Component;
  let fixture: ComponentFixture<SubForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubForm1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

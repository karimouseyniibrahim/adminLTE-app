import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppparameterComponent } from './appparameter.component';

describe('AppparameterComponent', () => {
  let component: AppparameterComponent;
  let fixture: ComponentFixture<AppparameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppparameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppparameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

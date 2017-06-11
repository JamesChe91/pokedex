import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLoadComponent } from './button-load.component';

describe('ButtonLoadComponent', () => {
  let component: ButtonLoadComponent;
  let fixture: ComponentFixture<ButtonLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

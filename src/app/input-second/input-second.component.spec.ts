import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSecondComponent } from './input-second.component';

describe('InputSecondComponent', () => {
  let component: InputSecondComponent;
  let fixture: ComponentFixture<InputSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

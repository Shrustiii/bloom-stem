import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerAdd } from './flower-add';

describe('FlowerAdd', () => {
  let component: FlowerAdd;
  let fixture: ComponentFixture<FlowerAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowerAdd],
    }).compileComponents();

    fixture = TestBed.createComponent(FlowerAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

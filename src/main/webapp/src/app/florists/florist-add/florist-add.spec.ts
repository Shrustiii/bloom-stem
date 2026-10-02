import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloristAdd } from './florist-add';

describe('FloristAdd', () => {
  let component: FloristAdd;
  let fixture: ComponentFixture<FloristAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloristAdd],
    }).compileComponents();

    fixture = TestBed.createComponent(FloristAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

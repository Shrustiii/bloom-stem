import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Florists } from './florists';

describe('Florists', () => {
  let component: Florists;
  let fixture: ComponentFixture<Florists>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Florists],
    }).compileComponents();

    fixture = TestBed.createComponent(Florists);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

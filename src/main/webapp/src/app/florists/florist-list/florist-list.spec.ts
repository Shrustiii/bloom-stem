import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloristList } from './florist-list';

describe('FloristList', () => {
  let component: FloristList;
  let fixture: ComponentFixture<FloristList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloristList],
    }).compileComponents();

    fixture = TestBed.createComponent(FloristList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

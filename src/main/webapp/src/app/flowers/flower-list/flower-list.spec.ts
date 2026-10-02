import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerList } from './flower-list';

describe('FlowerList', () => {
  let component: FlowerList;
  let fixture: ComponentFixture<FlowerList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowerList],
    }).compileComponents();

    fixture = TestBed.createComponent(FlowerList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

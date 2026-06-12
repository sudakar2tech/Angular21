import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gridremovearray } from './gridremovearray';

describe('Gridremovearray', () => {
  let component: Gridremovearray;
  let fixture: ComponentFixture<Gridremovearray>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gridremovearray],
    }).compileComponents();

    fixture = TestBed.createComponent(Gridremovearray);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gridarray } from './gridarray';

describe('Gridarray', () => {
  let component: Gridarray;
  let fixture: ComponentFixture<Gridarray>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gridarray],
    }).compileComponents();

    fixture = TestBed.createComponent(Gridarray);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

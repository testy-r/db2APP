import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetensystemComponent } from './planetensystem.component';

describe('PlanetensystemComponent', () => {
  let component: PlanetensystemComponent;
  let fixture: ComponentFixture<PlanetensystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetensystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetensystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

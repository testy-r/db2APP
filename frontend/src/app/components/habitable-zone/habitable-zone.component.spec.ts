import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitableZoneComponent } from './habitable-zone.component';

describe('HabitableZoneComponent', () => {
  let component: HabitableZoneComponent;
  let fixture: ComponentFixture<HabitableZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitableZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitableZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

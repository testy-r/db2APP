import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmosphaereComponent } from './atmosphaere.component';

describe('AtmosphaereComponent', () => {
  let component: AtmosphaereComponent;
  let fixture: ComponentFixture<AtmosphaereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmosphaereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmosphaereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

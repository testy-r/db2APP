import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoffComponent } from './stoff.component';

describe('StoffComponent', () => {
  let component: StoffComponent;
  let fixture: ComponentFixture<StoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

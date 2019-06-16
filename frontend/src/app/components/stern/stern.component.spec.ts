import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SternComponent } from './stern.component';

describe('SternComponent', () => {
  let component: SternComponent;
  let fixture: ComponentFixture<SternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

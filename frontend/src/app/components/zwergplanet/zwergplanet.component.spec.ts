import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZwergplanetComponent } from './zwergplanet.component';

describe('ZwergplanetComponent', () => {
  let component: ZwergplanetComponent;
  let fixture: ComponentFixture<ZwergplanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZwergplanetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZwergplanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

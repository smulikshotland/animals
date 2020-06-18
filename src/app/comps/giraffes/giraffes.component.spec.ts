import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiraffesComponent } from './giraffes.component';

describe('GiraffesComponent', () => {
  let component: GiraffesComponent;
  let fixture: ComponentFixture<GiraffesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiraffesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiraffesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

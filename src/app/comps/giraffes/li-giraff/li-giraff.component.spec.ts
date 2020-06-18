import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiGiraffComponent } from './li-giraff.component';

describe('LiGiraffComponent', () => {
  let component: LiGiraffComponent;
  let fixture: ComponentFixture<LiGiraffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiGiraffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiGiraffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

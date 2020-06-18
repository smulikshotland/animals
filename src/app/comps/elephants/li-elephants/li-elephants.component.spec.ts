import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiElephantsComponent } from './li-elephants.component';

describe('LiElephantsComponent', () => {
  let component: LiElephantsComponent;
  let fixture: ComponentFixture<LiElephantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiElephantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiElephantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

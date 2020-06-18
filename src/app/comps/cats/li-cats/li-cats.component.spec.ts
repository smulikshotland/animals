import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiCatsComponent } from './li-cats.component';

describe('LiCatsComponent', () => {
  let component: LiCatsComponent;
  let fixture: ComponentFixture<LiCatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiCatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

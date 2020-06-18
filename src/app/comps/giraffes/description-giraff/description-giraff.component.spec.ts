import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionGiraffComponent } from './description-giraff.component';

describe('DescriptionGiraffComponent', () => {
  let component: DescriptionGiraffComponent;
  let fixture: ComponentFixture<DescriptionGiraffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionGiraffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionGiraffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextGiraffComponent } from './text-giraff.component';

describe('TextGiraffComponent', () => {
  let component: TextGiraffComponent;
  let fixture: ComponentFixture<TextGiraffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextGiraffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextGiraffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

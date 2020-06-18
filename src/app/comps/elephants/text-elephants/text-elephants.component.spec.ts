import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextElephantsComponent } from './text-elephants.component';

describe('TextElephantsComponent', () => {
  let component: TextElephantsComponent;
  let fixture: ComponentFixture<TextElephantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextElephantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextElephantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

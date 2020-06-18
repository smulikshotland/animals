import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCatsComponent } from './text-cats.component';

describe('TextCatsComponent', () => {
  let component: TextCatsComponent;
  let fixture: ComponentFixture<TextCatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextCatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

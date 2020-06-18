import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionCatsComponent } from './description-cats.component';

describe('DescriptionCatsComponent', () => {
  let component: DescriptionCatsComponent;
  let fixture: ComponentFixture<DescriptionCatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionCatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

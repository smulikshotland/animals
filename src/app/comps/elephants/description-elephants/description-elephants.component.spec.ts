import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionElephantsComponent } from './description-elephants.component';

describe('DescriptionElephantsComponent', () => {
  let component: DescriptionElephantsComponent;
  let fixture: ComponentFixture<DescriptionElephantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionElephantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionElephantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

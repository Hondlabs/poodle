import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingAreaComponent } from './editing-area.component';

describe('EditingAreaComponent', () => {
  let component: EditingAreaComponent;
  let fixture: ComponentFixture<EditingAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditingAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

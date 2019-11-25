import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgSelectionAreaComponent } from './img-selection-area.component';

describe('ImgSelectionAreaComponent', () => {
  let component: ImgSelectionAreaComponent;
  let fixture: ComponentFixture<ImgSelectionAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgSelectionAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgSelectionAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

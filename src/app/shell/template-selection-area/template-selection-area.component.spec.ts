import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSelectionAreaComponent } from './template-selection-area.component';

describe('TemplateSelectionAreaComponent', () => {
  let component: TemplateSelectionAreaComponent;
  let fixture: ComponentFixture<TemplateSelectionAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateSelectionAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSelectionAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

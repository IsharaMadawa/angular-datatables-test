import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparateControlsComponent } from './separate-controls.component';

describe('SeparateControlsComponent', () => {
  let component: SeparateControlsComponent;
  let fixture: ComponentFixture<SeparateControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeparateControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparateControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

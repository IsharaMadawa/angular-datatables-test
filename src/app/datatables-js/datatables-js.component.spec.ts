import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatablesJsComponent } from './datatables-js.component';

describe('DatatablesJsComponent', () => {
  let component: DatatablesJsComponent;
  let fixture: ComponentFixture<DatatablesJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatablesJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatablesJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

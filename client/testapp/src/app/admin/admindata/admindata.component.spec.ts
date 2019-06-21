import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindataComponent } from './admindata.component';

describe('AdmindataComponent', () => {
  let component: AdmindataComponent;
  let fixture: ComponentFixture<AdmindataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

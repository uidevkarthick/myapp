import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincombComponent } from './admincomb.component';

describe('AdmincombComponent', () => {
  let component: AdmincombComponent;
  let fixture: ComponentFixture<AdmincombComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincombComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincombComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

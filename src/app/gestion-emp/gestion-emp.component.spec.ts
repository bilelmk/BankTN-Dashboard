import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEmpComponent } from './gestion-emp.component';

describe('GestionEmpComponent', () => {
  let component: GestionEmpComponent;
  let fixture: ComponentFixture<GestionEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

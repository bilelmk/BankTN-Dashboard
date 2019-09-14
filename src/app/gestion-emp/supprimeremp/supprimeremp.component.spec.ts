import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerempComponent } from './supprimeremp.component';

describe('SupprimerempComponent', () => {
  let component: SupprimerempComponent;
  let fixture: ComponentFixture<SupprimerempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerAgenceComponent } from './supprimer-agence.component';

describe('SupprimerAgenceComponent', () => {
  let component: SupprimerAgenceComponent;
  let fixture: ComponentFixture<SupprimerAgenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerAgenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

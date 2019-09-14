import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAgenceComponent } from './ajouter-agence.component';

describe('AjouterAgenceComponent', () => {
  let component: AjouterAgenceComponent;
  let fixture: ComponentFixture<AjouterAgenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterAgenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

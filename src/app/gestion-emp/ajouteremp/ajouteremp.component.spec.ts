import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterempComponent } from './ajouteremp.component';

describe('AjouterempComponent', () => {
  let component: AjouterempComponent;
  let fixture: ComponentFixture<AjouterempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

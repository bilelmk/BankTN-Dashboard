import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierempComponent } from './modifieremp.component';

describe('ModifierempComponent', () => {
  let component: ModifierempComponent;
  let fixture: ComponentFixture<ModifierempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

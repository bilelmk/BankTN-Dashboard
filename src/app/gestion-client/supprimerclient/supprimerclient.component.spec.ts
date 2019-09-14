import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerclientComponent } from './supprimerclient.component';

describe('SupprimerclientComponent', () => {
  let component: SupprimerclientComponent;
  let fixture: ComponentFixture<SupprimerclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

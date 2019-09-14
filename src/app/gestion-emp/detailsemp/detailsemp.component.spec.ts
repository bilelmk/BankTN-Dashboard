import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsempComponent } from './detailsemp.component';

describe('DetailsempComponent', () => {
  let component: DetailsempComponent;
  let fixture: ComponentFixture<DetailsempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

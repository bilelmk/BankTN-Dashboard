import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsclientComponent } from './detailsclient.component';

describe('DetailsclientComponent', () => {
  let component: DetailsclientComponent;
  let fixture: ComponentFixture<DetailsclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

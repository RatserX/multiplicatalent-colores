import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageColorComponent } from './home-page-color.component';

describe('HomePageColorComponent', () => {
  let component: HomePageColorComponent;
  let fixture: ComponentFixture<HomePageColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

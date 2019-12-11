import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPageColorComponent } from './index-page-color.component';

describe('IndexPageColorComponent', () => {
  let component: IndexPageColorComponent;
  let fixture: ComponentFixture<IndexPageColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexPageColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPageColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

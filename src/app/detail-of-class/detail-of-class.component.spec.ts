import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOfClassComponent } from './detail-of-class.component';

describe('DetailOfClassComponent', () => {
  let component: DetailOfClassComponent;
  let fixture: ComponentFixture<DetailOfClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailOfClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOfClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

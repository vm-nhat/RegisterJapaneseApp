import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfClassesComponent } from './list-of-classes.component';

describe('ListOfClassesComponent', () => {
  let component: ListOfClassesComponent;
  let fixture: ComponentFixture<ListOfClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

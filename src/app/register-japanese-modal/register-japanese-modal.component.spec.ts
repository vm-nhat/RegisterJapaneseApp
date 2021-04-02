import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterJapaneseModalComponent } from './register-japanese-modal.component';

describe('RegisterJapaneseModalComponent', () => {
  let component: RegisterJapaneseModalComponent;
  let fixture: ComponentFixture<RegisterJapaneseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterJapaneseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterJapaneseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

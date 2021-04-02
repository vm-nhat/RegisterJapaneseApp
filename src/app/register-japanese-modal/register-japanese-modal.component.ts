import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register-japanese-modal',
  templateUrl: './register-japanese-modal.component.html',
  styleUrls: ['./register-japanese-modal.component.scss']
})
export class RegisterJapaneseModalComponent implements OnInit {
  regesterForm= new FormGroup({
    userId: new FormControl(''),
    fullName: new FormControl(''),
    email: new FormControl(''),
    department: new FormControl(''),
    phone: new FormControl(''),
    sex: new FormControl(''),
    birthDate: new FormControl(''),
    jlptLevel: new FormControl('')
  });
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}

import { Component, Injectable, Output, EventEmitter } from '@angular/core';
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '-';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        year: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        day: parseInt(date[2], 10)
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    let mo: string
    let day : string
    if(date!=null)
    {
      if(date.month>9)
      {
      mo = date.month+""
      }
      else{
        mo = "0"+date.month
      }
      if(date.day>9)
      {
      day = date.day+""
      }
      else{
        day = "0"+date.day
      }

      return date ? date.year + this.DELIMITER + mo + this.DELIMITER + day : '';
    }
    return ""
  }
}

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {

  readonly DELIMITER = '-';

  parse(value: string): NgbDateStruct | null {
    //console.log("parse");
    if (value) {

      let date = value.split(this.DELIMITER);
      return {
        year: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        day: parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    let mo: string
    let day : string
    if(date!=null)
    {
      if(date.month>9)
      {
      mo = date.month+""
      }
      else{
        mo = "0"+date.month
      }
      if(date.day>9)
      {
      day = date.day+""
      }
      else{
        day = "0"+date.day
      }

      return date ? date.year + this.DELIMITER + mo + this.DELIMITER + day : '';
    }
    return ""

  }


}
@Component({
  selector: 'app-datepicker-popup',
  templateUrl: './datepicker-popup.component.html',
  styleUrls: ['./datepicker-popup.component.scss'],

  // NOTE: For this example we are only providing current component, but probably
  // NOTE: you will want to provide your main App Module
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ]
})
export class NgbdDatepickerAdapter {
  @Output() selectDate = new EventEmitter<any>();
  model: any;

  constructor(private ngbCalendar: NgbCalendar,
     private dateAdapter: NgbDateAdapter<string>,
     private ngformar :NgbDateParserFormatter) {}

  get today() {
    return this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
  }

  change(event : any) {
    this.selectDate.emit(event);
  }
}

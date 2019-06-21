import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // @ViewChild('testField', {static: true}) testField: ElementRef;

  // @ViewChild('testField', { static: true}) inputVariable: ElementRef;

  @ViewChild('localRef', {static: true}) appLoginForm: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  ngOnInit() {

    
   
  }

  // clickHandler() {
  //   console.log(this.inputVariable.nativeElement.value)
  // }

  onSubmit() {
    console.log(this.appLoginForm.controls.nameField.valid)
  }

}

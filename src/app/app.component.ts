import { style } from '@angular/animations';
import { Component, Directive, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  dynamicForm: FormGroup;
  formFields: any[] = [];
  // Step 1: Load or assign the JSON field definitions
  // dyanamicFormField = FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    // Step 1: Load or assign the JSON field definitions
    this.formFields = [
      {
        name: 'fname',
        type: 'text',
        placeholder: 'First Name',
        required: true,
      },
      { name: 'lname', type: 'text', placeholder: 'Last Name', required: true },
      { name: 'email', type: 'email', placeholder: 'Email', required: true },
      { name: 'age', type: 'number', placeholder: 'age', required: true },
    ];

    // Step 2: Build the form dynamically
    let formGroupObj = {};
    this.formFields.forEach((field) => {
      formGroupObj[field.name] = field.requied? ['', Validators.required]: [''];
    });
    this.dynamicForm = this.fb.group(formGroupObj);
  }

  onSubmit() {
    console.log(this.dynamicForm.value);
  }
}

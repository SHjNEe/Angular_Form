import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('form') form: NgForm;
  defaultQuestion = 'pet';
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  //   onSubmit(form: NgForm) {
  //     console.log(form);
  //     console.log(form.value);
  //   }

  onSubmit() {
    console.log(this.form);
    console.log(this.form.value);
  }
}

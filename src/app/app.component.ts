import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("form") form: NgForm;
  defaultQuestion = "pet";
  answer = "";
  genders = ["male", "female"];
  user = {
    userName: "",
    userEmail: "",
    secretQuestion: "",
    answer: "",
    gender: "",
  };
  submitted = false;
  suggestUserName() {
    const suggestedName = "Superuser";
    //Edit toan bo
    this.form.setValue({
      userData: {
        userName: suggestedName,
        userEmail: "trungnb@hapo.com",
      },
      secret: "pet",
      questionAnswer: "Test",
      gender: "male",
    });

    //Edit 1 phan
    // this.form.form.patchValue({
    //   userData: {
    //     userName: "newUserName",
    //     userEmail: "newUserEmail",
    //   },
    // });
  }
  clearUserData() {
    //Clear form
    this.form.reset();
    // this.form.setValue({
    //   userData: {
    //     userName: "",
    //     userEmail: "",
    //   },
    //   secret: "",
    //   questionAnswer: "",
    //   gender: "",
    // });
  }
  //   onSubmit(form: NgForm) {
  //     console.log(form);
  //     console.log(form.value);
  //   }

  onSubmit() {
    console.log(this.form);
    console.log(this.form.value);
    this.user.userName = this.form.value.userData.userName;
    this.user.userEmail = this.form.value.userData.userEmail;
    this.user.secretQuestion = this.form.value.secret;
    this.user.answer = this.form.value.questionAnswer;
    this.user.gender = this.form.value.gender;
    this.submitted = true;
  }
}

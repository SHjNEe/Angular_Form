import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
//Use ReactiveFormsModule
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        userName: new FormControl(null, Validators.required),
        userEmail: new FormControl(null, [
          Validators.required,
          Validators.email,
        ]),
      }),
      gender: new FormControl("male"),
    });
  }
  onSubmit() {
    console.log(this.signupForm);
  }
}
//Use FormsModule
// @Component({
//   selector: "app-root",
//   templateUrl: "./app.component.html",
//   styleUrls: ["./app.component.css"],
// })
// export class AppComponent {
//   @ViewChild("form") form: NgForm;
//   defaultQuestion = "pet";
//   answer = "";
//   genders = ["male", "female"];
//   user = {
//     userName: "",
//     userEmail: "",
//     secretQuestion: "",
//     answer: "",
//     gender: "",
//   };
//   submitted = false;
//   suggestUserName() {
//     const suggestedName = "Superuser";
//     //Edit toan bo
//     this.form.setValue({
//       userData: {
//         userName: suggestedName,
//         userEmail: "trungnb@hapo.com",
//       },
//       secret: "pet",
//       questionAnswer: "Test",
//       gender: "male",
//     });

//     //Edit 1 phan
//     // this.form.form.patchValue({
//     //   userData: {
//     //     userName: "newUserName",
//     //     userEmail: "newUserEmail",
//     //   },
//     // });
//   }
//   clearUserData() {
//     //Clear form
//     this.form.reset();
//     // this.form.setValue({
//     //   userData: {
//     //     userName: "",
//     //     userEmail: "",
//     //   },
//     //   secret: "",
//     //   questionAnswer: "",
//     //   gender: "",
//     // });
//   }
//   //   onSubmit(form: NgForm) {
//   //     console.log(form);
//   //     console.log(form.value);
//   //   }

//   onSubmit() {
//     console.log(this.form);
//     console.log(this.form.value);
//     this.user.userName = this.form.value.userData.userName;
//     this.user.userEmail = this.form.value.userData.userEmail;
//     this.user.secretQuestion = this.form.value.secret;
//     this.user.answer = this.form.value.questionAnswer;
//     this.user.gender = this.form.value.gender;
//     this.submitted = true;
//     this.form.reset();
//   }
// }

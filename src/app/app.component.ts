import { Component, OnInit, ViewChild } from "@angular/core";
import {
  FormArray,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
//Use ReactiveFormsModule
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  signupForm: FormGroup;
  forbiddenUsernames = ["Christ", "Anna"];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        userName: new FormControl(null, [
          Validators.required,
          this.forbiddenName.bind(this),
        ]),
        userEmail: new FormControl(
          null,
          [
            Validators.required,
            Validators.email,
            this.gmailDomainValidator.bind(this),
            // this.forbiddenEmails.bind(this),
          ],
          [this.forbiddenEmails.bind(this)]
        ),
      }),
      gender: new FormControl("male"),
      hobbies: new FormArray([]),
      //Value change
    });
    // this.signupForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });

    //async validator
    this.signupForm.statusChanges.subscribe((status) => console.log(status));

    this.signupForm.setValue({
      userData: {
        userName: "Max",
        userEmail: "max@test.com",
      },
      gender: "male",
      hobbies: [],
    });
    // this.signupForm.patchValue({
    //   userData: {
    //     userName: "Anna",
    //   },
    // });
  }
  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get("hobbies")).push(control);
  }
  //Custom validator
  forbiddenName(control: FormControl): { [key: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value)) {
      return {
        nameIsForbidden: true,
      };
    }
    return null;
  }

  //Custom validator
  gmailDomainValidator(
    control: FormControl
  ): { [key: string]: boolean } | null {
    const email = control.value;
    if (email && email.indexOf("@") !== -1) {
      const domain = email.split("@")[1].toLowerCase();
      if (domain !== "gmail.com") {
        return { invalidGmailDomain: true };
      }
    }
    return null;
  }
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value !== "test@gmail.com") {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
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

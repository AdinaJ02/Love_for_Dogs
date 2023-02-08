import { Component, OnInit } from '@angular/core';

// Importing Menu Controller
import { MenuController } from '@ionic/angular';

// Importing Form Validators and Group
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

// Importing the Firebase Authentication Module
import { AngularFireAuth } from '@angular/fire/compat/auth';

// Importing the Firebase Database
import { AngularFireDatabase } from '@angular/fire/compat/database';

// Importing the router
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  signUpForm!: FormGroup;
  isSubmitted = false;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  constructor(
    // Adding a menu controller
    public menuCtrl: MenuController,

    // Adding a form builder
    public formBuilder: FormBuilder,

    // Adding a firebase authentication
    public fireauth: AngularFireAuth,

    // Adding a firebase database
    public firedb: AngularFireDatabase,

    // Adding a router 
    public router: Router
  ) { }

  ngOnInit() {
    // Adding Validations
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[a-zA-Z]+ [a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.pattern('^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,5})$')]],
      pass: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,10}$')]],
      error: ['']
    })
  }

  // To disable the menu on the page
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  // Show and hide password
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  // Checking if errors are present or not
  get errorControl() {
    return this.signUpForm.controls;
  }

  // Firebase signup method
  signup() {
    this.fireauth.createUserWithEmailAndPassword(this.signUpForm.value['email'], this.signUpForm.value['pass'])
      .then(res => {
        if (res.user) {
          console.log(res.user);

          this.firedb.object('users/' + res.user.uid).set({
            name: this.signUpForm.value['name'],
            email: this.signUpForm.value['email'],
          });

          // Navigating to Accept info page
          this.router.navigate(['/accept-info-page1'], {queryParams: {uid: res.user.uid}});
        }
      })
      .catch(err => {
        console.log(`Registeration failed ${err}`);
        this.signUpForm.value['error'] = err.message;
      });
  }

  // On Submit button
  submitForm() {
    this.isSubmitted = true;
    if (!this.signUpForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.signUpForm.value)
      // Navigate to signup method
      this.signup();
    }
  }
}
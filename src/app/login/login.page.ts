import { Component, OnInit } from '@angular/core';

// Importing Menu Controller
import { MenuController } from '@ionic/angular';

// Importing Form Validators and Group
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

// Importing the Firebase Authentication Module
import { AngularFireAuth } from '@angular/fire/compat/auth';

// Importing the router
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
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

    // Adding a router 
    public router: Router
  ) { }

  ngOnInit() {
    // Adding Validations
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,5})$')]],
      pass: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,10}$')]],
      error: ['']
    })
  }
  // Show and hide password
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  // To disable the menu on the page
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  // Checking if errors are present or not
  get errorControl() {
    return this.loginForm.controls;
  }

  // Firebase login method
  login() {
    this.fireauth.signInWithEmailAndPassword(this.loginForm.value['email'], this.loginForm.value['pass'])
      .then(res => {
        if (res.user) {
          console.log(res.user);
          // Navigating to Home Page
          this.router.navigate(['/home-page'], {queryParams: {uid: res.user.uid}});
        }
      })
      .catch(err => {
        console.log(`login failed ${err}`);
        this.loginForm.value['error'] = err.message;
      });
  }

  // On Submit button
  submitForm() {
    this.isSubmitted = true;
    if (!this.loginForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.loginForm.value)
      // Navigate to login method
      this.login();
    }
  }
}

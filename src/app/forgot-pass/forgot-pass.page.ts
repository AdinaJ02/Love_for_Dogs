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
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.page.html',
  styleUrls: ['./forgot-pass.page.scss'],
})
export class ForgotPassPage implements OnInit {
  forgotForm!: FormGroup;
  isSubmitted = false;

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
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      error: ['']
    })
  }

  // To disable the menu on the page
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  // Checking if errors are present or not
  get errorControl() {
    return this.forgotForm.controls;
  }

  recover() {
    this.fireauth.sendPasswordResetEmail(this.forgotForm.value['email'])
      .then(data => {
        console.log(data);
        // Navigating to Login Page
        this.router.navigate(['/login']);
      })
      .catch(err => {
        console.log(` Link sent failure ${err}`);
        this.forgotForm.value['error'] = err.message;
      });
  }

  // On Submit button
  submitForm() {
    this.isSubmitted = true;
    if (!this.forgotForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.forgotForm.value)
      // Navigate to forgot method
      this.recover();
    }
  }
}

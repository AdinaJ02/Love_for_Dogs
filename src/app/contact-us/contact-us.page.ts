import { Component, OnInit } from '@angular/core';

// Importing Menu Controller
import { MenuController } from '@ionic/angular';

// Importing Form Validators and Group
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

// Importing Email JS
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

// Importing the router
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  contactForm!: FormGroup;
  isSubmitted = false;

  constructor(
    // Adding a menu controller
    public menuCtrl: MenuController,

    // Adding a form builder
    public formBuilder: FormBuilder,

    // Adding a router 
    public router: Router
  ) { }

  ngOnInit() {
    // Adding Validations
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[a-zA-Z]+ [a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.pattern('^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,5})$')]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100), Validators.pattern('^[a-zA-Z]+[a-zA-Z0-9 \.,-]*$')]]
    })
  }

  // To disable the menu on the page
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  // Checking if errors are present or not
  get errorControl() {
    return this.contactForm.controls;
  }

  contact(e) {
    emailjs.sendForm('service_q1gg0tj', 'template_tg4kbsl', e.target as HTMLFormElement, 'Qmqwq0wF4crpj8SGX')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        // Navigating to back to Home Page
        this.router.navigate(['/home-page']);
      }, (error) => {
        console.log(error.text);
      });
  }

  // On Submit button
  submitForm(e: Event) {
    this.isSubmitted = true;
    if (!this.contactForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.contactForm.value)
      // Navigate to contact method
      this.contact(e);
    }
  }

}

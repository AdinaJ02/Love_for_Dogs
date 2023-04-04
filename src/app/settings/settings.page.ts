import { Component, OnInit } from '@angular/core';

// Importing Menu Controller
import { MenuController } from '@ionic/angular';

// Importing Form Validators and Group
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

// Importing the Firebase Authentication Module
import { AngularFireAuth } from '@angular/fire/compat/auth';

// Importing the Firebase Database
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  settingsForm!: FormGroup;
  isSubmitted = false;
  userId!: string;
  userData!: unknown[];
  name_pet!: unknown;
  bio!: unknown;
  height!: unknown;
  weight!: unknown;
  success!: string;

  constructor(
    // Adding a menu controller
    public menuCtrl: MenuController,

    // Adding a form builder
    public formBuilder: FormBuilder,

    // Adding a firebase authentication
    public fireauth: AngularFireAuth,

    // Adding a firebase database
    public firedb: AngularFireDatabase,
  ) { }

  ngOnInit() {
    // Retrieving the User ID
    this.fireauth.authState.subscribe(data => {
      this.userId = data!.uid;

      this.firedb.list('users/' + this.userId).valueChanges().subscribe(result => {
        this.userData = result;
        this.name_pet = this.userData[6];
        this.bio = this.userData[0];
        this.height = this.userData[4];
        this.weight = this.userData[7];
      })
    })

    // Adding Validations
    this.settingsForm = this.formBuilder.group({
      name_pet: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]*$')]],
      height: ['', [Validators.required, Validators.min(3.8), Validators.max(35), Validators.pattern('^[0-9]*(\.{1})?([0-91-9])?$')]],
      weight: ['', [Validators.required, Validators.min(1), Validators.max(145), Validators.pattern('^[0-9]*(\.{1})?([0-91-9])?$')]],
      bio: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(70), Validators.pattern('^[a-zA-Z]+[a-zA-Z0-9 \.,-]*$')]],
      error: [''],
    })
  }

  // Checking if errors are present or not
  get errorControl() {
    return this.settingsForm.controls;
  }

  // To disable the menu on the page
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  // Updating the information 
  save() {
    this.firedb.object('users/' + this.userId).update({
      name_pet: this.settingsForm.value['name_pet'],
      height: this.settingsForm.value['height'],
      weight: this.settingsForm.value['weight'],
      bio: this.settingsForm.value['bio'],
    });

    this.success = "Data updated successfully";
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.settingsForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.settingsForm.value)
      // Navigate to save method
      this.save();
    }
  }
}

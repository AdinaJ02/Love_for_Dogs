import { Component, OnInit } from '@angular/core';

// Importing Menu Controller
import { MenuController } from '@ionic/angular';

// Importing a Location
import { Location } from '@angular/common';

// Importing Form Validators and Group
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

// Importing the Firebase Database
import { AngularFireDatabase } from '@angular/fire/compat/database';

// Importing the router
import { Router } from '@angular/router';

// Importing Activated Route and filter
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

// Importing Angular Storage
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-accept-info-page2',
  templateUrl: './accept-info-page2.page.html',
  styleUrls: ['./accept-info-page2.page.scss'],
})
export class AcceptInfoPage2Page implements OnInit {
  acceptForm2!: FormGroup;
  isSubmitted = false;
  uid!: string;
  selectedFile: any;

  constructor(
    // Adding a menu controller
    public menuCtrl: MenuController,

    // Adding a location controller
    private location: Location,

    // Adding a form builder
    public formBuilder: FormBuilder,

    // Adding a firebase database
    public firedb: AngularFireDatabase,

    // Adding a router 
    public router: Router,

    // Adding an activated route
    private route: ActivatedRoute,

    // Adding angular fire storage
    private fireStorage: AngularFireStorage
  ) { }

  ngOnInit() {
    this.route.queryParams.pipe(
      filter(params => params.uid)
    ).subscribe(params => {
      this.uid = params.uid;
    });

    this.acceptForm2 = this.formBuilder.group({
      image: ['', [Validators.required]],
      bio: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(70), Validators.pattern('^[a-zA-Z]+[a-zA-Z0-9 \.,-]*$')]],
      error: ['']
    });
  }

  // Checking if errors are present or not
  get errorControl() {
    return this.acceptForm2.controls;
  }

  // To disable the menu on the page
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  // Moving to the previous page from where we came
  back() {
    this.location.back();
  }

  acceptInfo() {
    this.firedb.object('users/' + this.uid).update({
      bio: this.acceptForm2.value['bio'],
    });

    this.uploadFile(this.selectedFile)

    // Navigating to Accept info page 2
    this.router.navigate(['/login']);
  }

  async uploadFile(file) {
    if (file && file.length) {
      try {
        const task = await this.fireStorage.ref('/users').child(this.uid).put(file[0]);
      } catch (error) {
        console.log(error);
      }
    }
  }

  chooseFile(event) {
    this.selectedFile = event.target.files
  }

  // On Click of submit button
  submitForm() {
    this.isSubmitted = true;
    if (!this.acceptForm2.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.acceptForm2.value)
      // Navigate to acceptInfo method
      this.acceptInfo();
    }
  }

}

import { Component, OnInit } from '@angular/core';

// Importing Menu Controller
import { MenuController } from '@ionic/angular';

// Importing Form Validators and Group
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

// Importing the Firebase Database
import { AngularFireDatabase } from '@angular/fire/compat/database';

// Importing the router
import { Router } from '@angular/router';

// Importing Activated Route and filter
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-accept-info-page1',
  templateUrl: './accept-info-page1.page.html',
  styleUrls: ['./accept-info-page1.page.scss'],
})
export class AcceptInfoPage1Page implements OnInit {
  acceptForm1!: FormGroup;
  isSubmitted = false;
  uid!: string;
  today = new Date().toISOString().split('T')[0];

  constructor(
    // Adding a menu controller
    public menuCtrl: MenuController,

    // Adding a form builder
    public formBuilder: FormBuilder,

    // Adding a firebase database
    public firedb: AngularFireDatabase,

    // Adding a router 
    public router: Router,

    // Adding an activated route
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.pipe(
      filter(params => params.uid)
    ).subscribe(params => {
      this.uid = params.uid;
    });


    this.acceptForm1 = this.formBuilder.group({
      name_pet: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]*$')]],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      height: ['', [Validators.required, Validators.min(3.8), Validators.max(35), Validators.pattern('^[0-9]*(\.{1})?([0-91-9])?$')]],
      weight: ['', [Validators.required, Validators.min(1), Validators.max(145), Validators.pattern('^[0-9]*(\.{1})?([0-91-9])?$')]],
      error: ['']
    });

    document.getElementById("dob")?.setAttribute('max', this.today);
  }

  // Checking if errors are present or not
  get errorControl() {
    return this.acceptForm1.controls;
  }

  // To disable the menu on the page
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  // Adding the information to the database
  acceptInfo() {
    this.firedb.object('users/' + this.uid).update({
      name_pet: this.acceptForm1.value['name_pet'],
      gender: this.acceptForm1.value['gender'],
      dob: this.acceptForm1.value['dob'],
      height: this.acceptForm1.value['height'],
      weight: this.acceptForm1.value['weight']
    });

    // Navigating to Accept info page 2
    this.router.navigate(['/accept-info-page2'], { queryParams: { uid: this.uid } });
  }


  submitForm() {
    this.isSubmitted = true;
    if (!this.acceptForm1.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.acceptForm1.value)
      // Navigate to acceptInfo method
      this.acceptInfo();
    }
  }
}

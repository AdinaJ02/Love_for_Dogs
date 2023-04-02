import { Component, OnInit } from '@angular/core';

// Importing Menu Controller
import { MenuController } from '@ionic/angular';

// Importing the Firebase Authentication Module
import { AngularFireAuth } from '@angular/fire/compat/auth';

// Importing the Firebase Database
import { AngularFireDatabase } from '@angular/fire/compat/database';

// Importing Angular Storage
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { NgZone } from '@angular/core';
import { Url } from 'url';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.page.html',
  styleUrls: ['./profile-page.page.scss'],
})
export class ProfilePagePage implements OnInit {
  userId!: string;
  userData!: unknown[];
  img_src_string!: Url;
  name_pet!: unknown;
  bio!: unknown;
  height!: unknown;
  weight!: unknown;

  constructor(
    // Adding a menu controller
    public menuCtrl: MenuController,

    // Adding a firebase authentication
    public fireauth: AngularFireAuth,

    // Adding a firebase database
    public firedb: AngularFireDatabase,

    // Adding angular fire storage
    public fireStorage: AngularFireStorage,

    private zone: NgZone
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

      this.fireStorage.ref('users/' + this.userId).getDownloadURL().subscribe((url) => {
        this.zone.run(() => {
          this.img_src_string = url;
        })
      })
    })
  }

  // To disable the menu on the page
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

}

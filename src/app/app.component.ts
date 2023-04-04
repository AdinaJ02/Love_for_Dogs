import { Component } from '@angular/core';

// Importing the Firebase Authentication Module
import { AngularFireAuth } from '@angular/fire/compat/auth';

// Importing the Firebase Database
import { AngularFireDatabase } from '@angular/fire/compat/database';

// Importing Angular Storage
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { NgZone } from '@angular/core';
import { Url } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  userId!: string;
  userData!: unknown[];
  img_src_string!: Url;
  name_pet!: unknown;
  bio!: unknown;

  public appPages = [
    { title: 'Camera', url: '/folder/Inbox', icon: 'camera' },
    { title: 'GPS Tracker', url: '/folder/Inbox', icon: 'navigate' },
    { title: 'Contact Us', url: '/contact-us', icon: 'chatbox' },
    { title: 'Settings', url: '/settings', icon: 'settings' },
    { title: 'Log Out', url: '/logout', icon: 'log-out' },
  ];
  constructor(
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

      this.firedb.list('users/'+this.userId).valueChanges().subscribe(result => {
        this.userData = result;
        this.name_pet = this.userData[6];
        this.bio = this.userData[0];
      })

      this.fireStorage.ref('users/'+this.userId).getDownloadURL().subscribe((url) => {
        this.zone.run(() => {
          this.img_src_string = url;
        })
      })
    })
  }
}

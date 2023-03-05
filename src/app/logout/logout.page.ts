import { Component, OnInit } from '@angular/core';

// Importing the Firebase Authentication Module
import { AngularFireAuth } from '@angular/fire/compat/auth';

// Importing router
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(
    // Adding a firebase authentication
    public fireauth: AngularFireAuth,

    // Adding router
    public router: Router,
  ) { }

  ngOnInit() {
    this.fireauth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

}

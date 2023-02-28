import { Component, OnInit } from '@angular/core';

// Importing the router
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {

  constructor(
    // Adding a router 
    public router: Router
  ) { }

  ngOnInit() {
  }

  cameraNavigate() {
    this.router.navigate([''])
  }

  reminderNavigate(){
    this.router.navigate([''])
  }
}

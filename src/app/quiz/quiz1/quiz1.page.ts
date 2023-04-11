import { Component, OnInit } from '@angular/core';

// Importing Menu Controller
import { MenuController } from '@ionic/angular';

// Importing the router
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz1',
  templateUrl: './quiz1.page.html',
  styleUrls: ['./quiz1.page.scss'],
})
export class Quiz1Page implements OnInit {

  constructor(
    // Adding a menu controller
    public menuCtrl: MenuController,

    // Adding a router 
    public router: Router
  ) { }

  ngOnInit() {
  }

  // To disable the menu on the page
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  navigatePage(q1: string) {
    this.router.navigate(['/quiz2'], { queryParams: { q1_ans: q1 } });
  }
}

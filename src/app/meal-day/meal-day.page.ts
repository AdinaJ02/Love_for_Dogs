import { Component, OnInit } from '@angular/core';

// Importing Menu Controller
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-meal-day',
  templateUrl: './meal-day.page.html',
  styleUrls: ['./meal-day.page.scss'],
})
export class MealDayPage implements OnInit {
  constructor(
    // Adding a menu controller
    public menuCtrl: MenuController
  ) { }

  ngOnInit() {
  }

  // To disable the menu on the page
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
}

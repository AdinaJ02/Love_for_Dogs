import { Component, OnInit } from '@angular/core';

// Importing Menu Controller
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-accept-info-page1',
  templateUrl: './accept-info-page1.page.html',
  styleUrls: ['./accept-info-page1.page.scss'],
})
export class AcceptInfoPage1Page implements OnInit {
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

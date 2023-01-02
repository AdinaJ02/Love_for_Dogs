import { Component, OnInit } from '@angular/core';

// Importing Menu Controller
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-accept-info-page2',
  templateUrl: './accept-info-page2.page.html',
  styleUrls: ['./accept-info-page2.page.scss'],
})
export class AcceptInfoPage2Page implements OnInit {
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

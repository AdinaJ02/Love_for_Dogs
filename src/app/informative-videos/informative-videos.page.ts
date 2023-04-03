import { Component, OnInit } from '@angular/core';

// Importing Menu Controller
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-informative-videos',
  templateUrl: './informative-videos.page.html',
  styleUrls: ['./informative-videos.page.scss'],
})
export class InformativeVideosPage implements OnInit {

  constructor(
    // Adding a menu controller
    public menuCtrl: MenuController,
  ) { }

  ngOnInit() {
  }

  // To disable the menu on the page
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
}

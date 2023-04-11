import { Component, OnInit } from '@angular/core';

// Importing Menu Controller
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {

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

import { Component, OnInit } from '@angular/core';

// Importing Menu Controller
import { MenuController } from '@ionic/angular';

// Importing the router
import { Router } from '@angular/router';

@Component({
  selector: 'app-breed-info',
  templateUrl: './breed-info.page.html',
  styleUrls: ['./breed-info.page.scss'],
})
export class BreedInfoPage implements OnInit {

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

  navigatePage(breed_name: string) {
    this.router.navigate(['/breed-info-page'], { queryParams: { breed: breed_name } });
  }

}

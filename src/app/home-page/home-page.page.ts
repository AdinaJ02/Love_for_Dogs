import { Component, OnInit } from '@angular/core';

// Importing Activated Route and filter
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

// Importing Menu Controller
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {
  uid!: string;

  constructor(
    // Adding a menu controller
    public menuCtrl: MenuController,

    // Adding an activated route
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.pipe(
      filter(params => params.uid)
    ).subscribe(params => {
      this.uid = params.uid;
    });
  }

  openMenu(){
    this.menuCtrl.enable(true);
    this.menuCtrl.open();
  }
}

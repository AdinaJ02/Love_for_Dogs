import { Component, OnInit } from '@angular/core';

// Importing Menu Controller
import { MenuController } from '@ionic/angular';

// Importing the router
import { Router } from '@angular/router';

// Importing Activated Route and filter
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

// Importing a Location
import { Location } from '@angular/common';

@Component({
  selector: 'app-quiz2',
  templateUrl: './quiz2.page.html',
  styleUrls: ['./quiz2.page.scss'],
})
export class Quiz2Page implements OnInit {
  q1!: string;
  
  constructor(
    // Adding a menu controller
    public menuCtrl: MenuController,

    // Adding a router 
    public router: Router,

    // Adding an activated route
    private route: ActivatedRoute,

    // Adding a location controller
    private location: Location
  ) { }

  ngOnInit() {
    this.route.queryParams.pipe(
      filter(params => params.q1_ans)
    ).subscribe(params => {
      this.q1 = params.q1_ans;
    });
  }

  // To disable the menu on the page
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  navigatePage(q2: string) {
    this.router.navigate(['/quiz3'], { queryParams: { q1_ans: this.q1, q2_ans: q2 } });
  }

  // Moving to the previous page from where we came
  back() {
    this.location.back();
  }
}

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
  selector: 'app-quiz3',
  templateUrl: './quiz3.page.html',
  styleUrls: ['./quiz3.page.scss'],
})
export class Quiz3Page implements OnInit {
  q1!: string;
  q2!: string;

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
      this.q2 = params.q2_ans;
    });
  }

  // To disable the menu on the page
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  navigatePage(q3: string) {
    this.router.navigate(['/quiz-output'], { queryParams: { q1_ans: this.q1, q2_ans: this.q2, q3_ans: q3 } });
  }

  // Moving to the previous page from where we came
  back() {
    this.location.back();
  }
}

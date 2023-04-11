import { Component, OnInit } from '@angular/core';

// Importing Menu Controller
import { MenuController } from '@ionic/angular';

// Importing Activated Route and filter
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-quiz-output',
  templateUrl: './quiz-output.page.html',
  styleUrls: ['./quiz-output.page.scss'],
})
export class QuizOutputPage implements OnInit {
  q1!: string;
  q2!: string;
  q3!: string;
  img_src!: string;
  emotion!: string;

  constructor(
    // Adding a menu controller
    public menuCtrl: MenuController,

    // Adding an activated route
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.pipe(
      filter(params => params.q1_ans)
    ).subscribe(params => {
      this.q1 = params.q1_ans;
      this.q2 = params.q2_ans;
      this.q3 = params.q3_ans;
    });

    if (this.q1 == '1' && this.q2 == '1' && this.q3 == '1'){
      this.emotion = "Playful";
      this.img_src = "assets/images/playful.png";
    }

    else if (this.q1 == '1' && this.q2 == '1' && this.q3 == '2'){
      this.emotion = "Anxious";
      this.img_src = "assets/images/anxious.png";
    }

    else if (this.q1 == '1' && this.q2 == '1' && this.q3 == '3'){
      this.emotion = "Aggressive";
      this.img_src = "assets/images/aggressive.png";
    }

    else if (this.q1 == '1' && this.q2 == '2' && this.q3 == '1'){
      this.emotion = "Anxious";
      this.img_src = "assets/images/anxious.png";
    }

    else if (this.q1 == '1' && this.q2 == '2' && this.q3 == '2'){
      this.emotion = "Aggressive";
      this.img_src = "assets/images/aggressive.png";
    }

    else if (this.q1 == '1' && this.q2 == '2' && this.q3 == '3'){
      this.emotion = "Aggressive";
      this.img_src = "assets/images/aggressive.png";
    }

    else if (this.q1 == '1' && this.q2 == '3' && this.q3 == '1'){
      this.emotion = "Aggressive";
      this.img_src = "assets/images/aggressive.png";
    }

    else if (this.q1 == '1' && this.q2 == '3' && this.q3 == '2'){
      this.emotion = "Aggressive";
      this.img_src = "assets/images/aggressive.png";
    }

    else if (this.q1 == '1' && this.q2 == '3' && this.q3 == '3'){
      this.emotion = "Aggressive";
      this.img_src = "assets/images/aggressive.png";
    }

    else if (this.q1 == '2' && this.q2 == '1' && this.q3 == '1'){
      this.emotion = "Playful";
      this.img_src = "assets/images/playful.png";
    }

    else if (this.q1 == '2' && this.q2 == '1' && this.q3 == '2'){
      this.emotion = "Playful";
      this.img_src = "assets/images/playful.png";
    }

    else if (this.q1 == '2' && this.q2 == '1' && this.q3 == '3'){
      this.emotion = "Anxious";
      this.img_src = "assets/images/anxious.png";
    }

    else if (this.q1 == '2' && this.q2 == '2' && this.q3 == '1'){
      this.emotion = "Happy";
      this.img_src = "assets/images/happy.png";
    }

    else if (this.q1 == '2' && this.q2 == '2' && this.q3 == '2'){
      this.emotion = "Happy";
      this.img_src = "assets/images/happy.png";
    }

    else if (this.q1 == '2' && this.q2 == '2' && this.q3 == '3'){
      this.emotion = "Sad";
      this.img_src = "assets/images/sad.png";
    }

    else if (this.q1 == '2' && this.q2 == '3' && this.q3 == '1'){
      this.emotion = "Anxious";
      this.img_src = "assets/images/anxious.png";
    }

    else if (this.q1 == '2' && this.q2 == '3' && this.q3 == '2'){
      this.emotion = "Sad";
      this.img_src = "assets/images/sad.png";
    }

    else if (this.q1 == '2' && this.q2 == '3' && this.q3 == '3'){
      this.emotion = "Anxious";
      this.img_src = "assets/images/anxious.png";
    }

    else if (this.q1 == '3' && this.q2 == '1' && this.q3 == '1'){
      this.emotion = "Happy";
      this.img_src = "assets/images/happy.png";
    }

    else if (this.q1 == '3' && this.q2 == '1' && this.q3 == '2'){
      this.emotion = "Playful";
      this.img_src = "assets/images/playful.png";
    }

    else if (this.q1 == '3' && this.q2 == '1' && this.q3 == '3'){
      this.emotion = "Anxious";
      this.img_src = "assets/images/anxious.png";
    }

    else if (this.q1 == '3' && this.q2 == '2' && this.q3 == '1'){
      this.emotion = "Happy";
      this.img_src = "assets/images/happy.png";
    }

    else if (this.q1 == '3' && this.q2 == '2' && this.q3 == '2'){
      this.emotion = "Playful";
      this.img_src = "assets/images/playful.png";
    }

    else if (this.q1 == '3' && this.q2 == '2' && this.q3 == '3'){
      this.emotion = "Sad";
      this.img_src = "assets/images/sad.png";
    }

    else if (this.q1 == '3' && this.q2 == '3' && this.q3 == '1'){
      this.emotion = "Happy";
      this.img_src = "assets/images/happy.png";
    }

    else if (this.q1 == '3' && this.q2 == '3' && this.q3 == '2'){
      this.emotion = "Anxious";
      this.img_src = "assets/images/anxious.png";
    }

    else if (this.q1 == '3' && this.q2 == '3' && this.q3 == '3'){
      this.emotion = "Sad";
      this.img_src = "assets/images/sad.png";
    }
  }

  // To disable the menu on the page
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
}

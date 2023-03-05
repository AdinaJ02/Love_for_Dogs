import { Component, OnInit } from '@angular/core';

// Importing Menu Controller
import { MenuController } from '@ionic/angular';

// Importing the Firebase Database
import { AngularFireDatabase } from '@angular/fire/compat/database';

// Importing the Date Time Format Options 
import type { FormatDateOptions } from '@formatjs/intl';

// Importing Angular Storage
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { NgZone } from '@angular/core';
import { Url } from 'url';

@Component({
  selector: 'app-meal-day',
  templateUrl: './meal-day.page.html',
  styleUrls: ['./meal-day.page.scss'],
})
export class MealDayPage implements OnInit {
  // Formatting the date to format DD-MM-YYYY
  currentDate = new Date();
  options: FormatDateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
  dateString = this.currentDate.toLocaleDateString('en-GB', this.options);
  formattedDate = this.dateString.replace(/\//g, '-');

  mealData!: unknown[];
  heading!: unknown;
  desc1!: unknown;
  desc2!: unknown;
  img_src_string!: Url;

  constructor(
    // Adding a menu controller
    public menuCtrl: MenuController,

    // Adding a firebase database
    public firedb: AngularFireDatabase,

    // Adding angular fire storage
    private fireStorage: AngularFireStorage,

    private zone: NgZone
  ) { }

  ngOnInit() {
    // Adding the data to the database
    // this.firedb.object('meal-day/09-04-2023').set({
    //   heading: "Apples",
    //   desc1: "Apples provide many important vitamins for dogs which includes vitamins A and C. They are also a good source of fiber which can help regulate a dogs digestion.",
    //   desc2: "They also provide a way to keep your dog's teeth clean and help to freshen their breath. However, we should remove the core and the seeds of the apple before giving it to the dog."
    // });

    this.firedb.list('meal-day/' + this.formattedDate).valueChanges().subscribe(result => {
      this.mealData = result;
      this.heading = this.mealData[2];
      this.desc1 = this.mealData[0];
      this.desc2 = this.mealData[1];
    })

    this.fireStorage.ref('meal-day/' + this.formattedDate + ".png").getDownloadURL().subscribe((url) => {
      this.zone.run(() => {
        this.img_src_string = url;
      })
    })
  }

  // To disable the menu on the page
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
}

import { Component, OnInit } from '@angular/core';

// Importing Menu Controller
import { MenuController } from '@ionic/angular';

// Importing the Firebase Database
import { AngularFireDatabase } from '@angular/fire/compat/database';

// Importing Angular Storage
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { NgZone } from '@angular/core';
import { Url } from 'url';

// Importing Activated Route and filter
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breed-info-page',
  templateUrl: './breed-info-page.page.html',
  styleUrls: ['./breed-info-page.page.scss'],
})
export class BreedInfoPagePage implements OnInit {
  breedData!: unknown[];
  heading!: unknown;
  desc1!: unknown;
  desc2!: unknown;
  img_src_string!: Url;

  breed!: string;

  constructor(
    // Adding a menu controller
    public menuCtrl: MenuController,

    // Adding a firebase database
    public firedb: AngularFireDatabase,

    // Adding angular fire storage
    private fireStorage: AngularFireStorage,

    private zone: NgZone,

    // Adding an activated route
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.pipe(
      filter(params => params.breed)
    ).subscribe(params => {
      this.breed = params.breed;
    });

    // Adding the data to the database
    // this.firedb.object('breed/Rottweller').set({
    //   heading: "Rottweller",
    //   desc1: "The Rottweiler is a robust working breed of great strength descended from the mastiffs of the Roman legions. A gentle playmate and protector within the family circle, the Rottie observes the outside world with a self-assured aloofness. A male Rottweiler will stand anywhere from 24 to 27 muscular inches at the shoulder; females run a bit smaller and lighter. The glistening, short black coat with smart rust markings add to the picture of imposing strength.",
    //   desc2: "A thickly muscled hindquarters powers the Rottie's effortless trotting gait. A well-bred and properly raised Rottie will be calm and confident, courageous but not unduly aggressive. The aloof demeanor these world-class guardians present to outsiders belies the playfulness, and downright silliness, that endear Rotties to their loved ones. (No one told the Rottie he's not a toy breed, so he is liable plop onto your lap for a cuddle.) Early training and socialization will harness a Rottie's territorial instincts in a positive way."
    // });

    this.firedb.list('breed/' + this.breed).valueChanges().subscribe(result => {
      this.breedData = result;
      this.heading = this.breedData[2];
      this.desc1 = this.breedData[0];
      this.desc2 = this.breedData[1];
    })

    this.fireStorage.ref('breed/' + this.breed + ".png").getDownloadURL().subscribe((url) => {
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

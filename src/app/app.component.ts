import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'GPS Tracker', url: '/folder/Inbox', icon: 'navigate' },
    { title: 'Contact Us', url: '/folder/Favorites', icon: 'chatbox' },
    { title: 'Settings', url: '/folder/Archived', icon: 'settings' },
    { title: 'Log Out', url: '/folder/Trash', icon: 'log-out' },
  ];
  constructor() {}
}

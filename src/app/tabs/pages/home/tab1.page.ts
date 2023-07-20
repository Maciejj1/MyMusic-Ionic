import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  onSongSelected(song: any) {
    // You can access the selected song here and perform any necessary actions
    console.log('Selected Song:', song);
  }
  constructor() {}

}

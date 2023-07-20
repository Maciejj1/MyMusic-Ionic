import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';
import { TestService } from 'src/services/test.service';

@Component({
  selector: 'app-last-songs',
  templateUrl: './last-songs.page.html',
  styleUrls: ['./last-songs.page.scss'],
})
export class LastSongsPage implements OnInit {
  @ViewChild("range", { static: false }) range: IonRange | undefined;
  songs: any[] = []; // Lista utworów
  selectedSong: any = {};
  constructor(private musicPlayerService: TestService) { }
  ngOnInit() {
    // Przypisanie listy utworów z TestService
    this.songs = this.musicPlayerService.songs;
  }
 @Output() selected = new EventEmitter<any>();selectSong() {
      // Assuming you have some logic here to set the selectedSong
      this.selected.emit(this.selectedSong);
    }
  // Metoda do odtwarzania utworu
  playSong(song: any) {

    // this.selectedSong = song;

    this.musicPlayerService.setSelectedSongData(song);
    this.musicPlayerService.playSong(
      song.title,
      song.subtitle,
      song.img,
      song.path
    );


  }
}

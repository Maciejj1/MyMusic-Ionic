import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/services/test.service';

@Component({
  selector: 'app-musicplayer',
  templateUrl: './musicplayer.page.html',
  styleUrls: ['./musicplayer.page.scss'],
})
export class MusicplayerPage implements OnInit {
  // Get all the variables from the TestService
  currTitle: string = this.musicPlayerService.currTitle;
  currSubtitle: string = this.musicPlayerService.currSubtitle;
  currImage: string = this.musicPlayerService.currImage;
  progress: number = this.musicPlayerService.progress;
  isPlaying: boolean = this.musicPlayerService.isPlaying;
  isTouched: boolean = this.musicPlayerService.isTouched;
  currSecsText: string = this.musicPlayerService.currSecsText;
  durationText: string = this.musicPlayerService.durationText;
  currRangeTime: number = this.musicPlayerService.currRangeTime;
  maxRangeValue: number = this.musicPlayerService.maxRangeValue;
  currSong!: HTMLAudioElement;
  upNextImg: string = this.musicPlayerService.upNextImg;
  upNextTitle: string = this.musicPlayerService.upNextTitle;
  upNextSubtitle: string = this.musicPlayerService.upNextSubtitle;
  // ... other variables ...

  constructor(private musicPlayerService: TestService) { }

  ngOnInit() {
    this.musicPlayerService.getSelectedSongData().subscribe((data) => {
      if (data) {
        this.currTitle = data.title;
        this.currSubtitle = data.subtitle;
        this.currImage = data.img;
        // Set upNext properties
        const currentIndex = this.musicPlayerService.songs.findIndex((x) => x.title === this.currTitle);
        if (currentIndex !== -1) {
          const nextIndex = (currentIndex + 1) % this.musicPlayerService.songs.length;
          this.upNextImg = this.musicPlayerService.songs[nextIndex].img;
          this.upNextTitle = this.musicPlayerService.songs[nextIndex].title;
          this.upNextSubtitle = this.musicPlayerService.songs[nextIndex].subtitle;
        } else {
          this.upNextImg = '';
          this.upNextTitle = '';
          this.upNextSubtitle = '';
        }
      }
    });
  }


  // Minimalizuj odtwarzacz
  minimize() {
    document.getElementById("fullPlayer")!.style.bottom = "-1000px";
    document.getElementById("miniPlayer")!.style.bottom = "50px";
  }

  // Maksymalizuj odtwarzacz
  maximize() {
    document.getElementById("fullPlayer")!.style.bottom = "0px";
    document.getElementById("miniPlayer")!.style.bottom = "-100px";
  }

  // Metoda do odtwarzania poprzedniego utworu


  // Metoda do rozpoczęcia odtwarzania utworu
  play() {
    this.musicPlayerService.play();
  }

  // Metoda do wstrzymania odtwarzania utworu
  pause() {
    this.musicPlayerService.pause();
  }

  // Metoda do odtwarzania następnego utworu
  playPrev() {
    this.musicPlayerService.playPrev();
    // Update the current song information after playing previous song
    this.currTitle = this.musicPlayerService.currTitle;
    this.currSubtitle = this.musicPlayerService.currSubtitle;
    this.currImage = this.musicPlayerService.currImage;
  }

  playNext() {
    this.musicPlayerService.playNext();
    // Update the current song information after playing next song
    this.currTitle = this.musicPlayerService.currTitle;
    this.currSubtitle = this.musicPlayerService.currSubtitle;
    this.currImage = this.musicPlayerService.currImage;
    this.upNextImg = this.musicPlayerService.upNextImg;
    this.upNextSubtitle = this.musicPlayerService.upNextSubtitle;
    this.upNextTitle = this.musicPlayerService.upNextTitle;
  }


  // Metoda do anulowania odtwarzania utworu
  cancel() {
    this.musicPlayerService.cancel();
    document.getElementById("miniPlayer")!.style.bottom = "-1000px";
  }

  // Metoda do rozpoczęcia dotyku na zakresie
  touchStart() {
    this.isTouched = true;
    this.currRangeTime = Number(this.musicPlayerService.range?.value);
  }

  // Metoda do aktualizacji pozycji w trakcie przeciągania zakresu
  touchMove() {
    const rangeValue: any = this.musicPlayerService.range?.value;
    if (rangeValue !== undefined) {
      this.currSecsText = this.musicPlayerService.sToTime(rangeValue);
    }
  }

  // Metoda do zakończenia dotyku na zakresie
  touchEnd() {
    this.isTouched = false;
    this.currSong.currentTime = Number(this.musicPlayerService.range?.value);
    this.currSecsText = this.musicPlayerService.sToTime(this.currSong.currentTime);
    this.currRangeTime = Number(this.currSong.currentTime.toFixed(2).toString().substring(0, 5));
    if (this.isPlaying) {
      this.currSong.play();
    }
  }
}

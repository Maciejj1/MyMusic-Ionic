import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';

@Component({
  selector: 'app-song',
  templateUrl: './song.page.html',
  styleUrls: ['./song.page.scss'],
})
export class SongPage implements OnInit {
  @ViewChild("range", {static: false}) range: IonRange | undefined;

  songs = [
    {
      title: "Title 1",
      subtitle: "Subtitle 1",
      img: "/assets/images/image1.jpg",
      path: "/assets/mp3/music1.mp3"
    },
    {
      title: "Title 2",
      subtitle: "Subtitle 2",
      img: "/assets/images/image2.jpg",
      path: "/assets/mp3/music2.mp3"
    },
    {
      title: "Title 3",
      subtitle: "Subtitle 3",
      img: "/assets/images/image3.jpg",
      path: "/assets/mp3/music3.mp3"
    },
    {
      title: "Title 4",
      subtitle: "Subtitle 4",
      img: "/assets/images/image4.jpg",
      path: "/assets/mp3/music4.mp3"
    },
    {
      title: "Title 5",
      subtitle: "Subtitle 5",
      img: "/assets/images/image5.png",
      path: "/assets/mp3/music5.mp3"
    }
  ];

  // Aktualne szczegóły odtwarzanego utworu
  currTitle: string = "";
  currSubtitle: string = "";
  currImage: string = "";
  progress: number = 0;
  isPlaying: boolean = false;
  isTouched: boolean = false;
  currSecsText: string = "";
  durationText: string = "";
  currRangeTime: number = 0;
  maxRangeValue: number = 0;
  currSong!: HTMLAudioElement;
  upNextImg: string = "";
  upNextTitle: string = "";
  upNextSubtitle: string = "";

  constructor() {}

  ngOnInit() {}

  // Odtwarzaj utwór
  playSong(title: string, subTitle: string, img: string, song: string) {
    // Jeśli odtwarzany jest inny utwór, zatrzymaj go
    if (this.currSong != null) {
      this.currSong.pause();
    }

    // Otwórz widok pełnego odtwarzacza
    document.getElementById("fullPlayer")!.style.bottom = "0px";

    this.currTitle = title;
    this.currSubtitle = subTitle;
    this.currImage = img;
    this.currSong = new Audio(song);

    this.currSong.play().then(() => {
      this.durationText = this.sToTime(this.currSong.duration);
      this.maxRangeValue = Number(this.currSong.duration.toFixed(2).toString().substring(0, 5));

      // Znajdź indeks aktualnego utworu
      var index = this.songs.findIndex(x => x.title == this.currTitle);

      // Sprawdź, czy aktualny utwór jest ostatnim na liście
      if ((index + 1) == this.songs.length) {
        this.upNextImg = this.songs[0].img;
        this.upNextTitle = this.songs[0].title;
        this.upNextSubtitle = this.songs[0].subtitle;
      } else {
        this.upNextImg = this.songs[index + 1].img;
        this.upNextTitle = this.songs[index + 1].title;
        this.upNextSubtitle = this.songs[index + 1].subtitle;
      }

      this.isPlaying = true;
    });

    this.currSong.addEventListener("timeupdate", () => {
      // Aktualizuj informacje na bieżąco podczas odtwarzania utworu

      // Jeśli zakres ion-range nie jest dotykany, aktualizuj
      if (!this.isTouched) {
        // Aktualizuj wartość ion-range
        this.currRangeTime = Number(this.currSong.currentTime.toFixed(2).toString().substring(0, 5));
        // Aktualizuj tekst z bieżącym czasem utworu
        this.currSecsText = this.sToTime(this.currSong.currentTime);
        // Aktualizuj pasek postępu w widoku minimalizowanym
        this.progress = (Math.floor(this.currSong.currentTime) / Math.floor(this.currSong.duration));

        // Jeśli utwór osiągnął koniec, przejdź do następnego
        if (this.currSong.currentTime == this.currSong.duration) {
          this.playNext();
        }
      }
    });
  }

  // Dodaj zero na początku, jeśli liczba jest mniejsza niż 10
  padZero(v: number) {
    return (v < 10) ? "0" + v : v;
  }

  // Konwertuj czas w sekundach na format mm:ss
  sToTime(t: number) {
    return this.padZero(parseInt(String((t / 60) % 60))) + ":" + this.padZero(parseInt(String(t % 60)));
  }

  // Odtwarzaj następny utwór
  playNext() {
    var index = this.songs.findIndex(x => x.title == this.currTitle);

    // Sprawdź, czy aktualny utwór jest ostatnim na liście
    if ((index + 1) == this.songs.length) {
      this.playSong(this.songs[0].title, this.songs[0].subtitle, this.songs[0].img, this.songs[0].path);
    } else {
      var nextIndex = index + 1;
      this.playSong(this.songs[nextIndex].title, this.songs[nextIndex].subtitle, this.songs[nextIndex].img, this.songs[nextIndex].path);
    }
  }

  // Odtwarzaj poprzedni utwór
  playPrev() {
    var index = this.songs.findIndex(x => x.title == this.currTitle);

    // Sprawdź, czy aktualny utwór jest pierwszy na liście
    if ((index == 0)) {
      var lastIndex = this.songs.length - 1;
      this.playSong(this.songs[lastIndex].title, this.songs[lastIndex].subtitle, this.songs[lastIndex].img, this.songs[lastIndex].path);
    } else {
      var prevIndex = index - 1;
      this.playSong(this.songs[prevIndex].title, this.songs[prevIndex].subtitle, this.songs[prevIndex].img, this.songs[prevIndex].path);
    }
  }

  // Minimalizuj odtwarzacz
  minimize() {
    document.getElementById("fullPlayer")!.style.bottom = "-1000px";
    document.getElementById("miniPlayer")!.style.bottom = "0px";
  }

  // Maksymalizuj odtwarzacz
  maximize() {
    document.getElementById("fullPlayer")!.style.bottom = "0px";
    document.getElementById("miniPlayer")!.style.bottom = "-100px";
  }

  // Wstrzymaj odtwarzanie
  pause() {
    this.currSong.pause();
    this.isPlaying = false;
  }

  // Wznów odtwarzanie
  play() {
    this.currSong.play();
    this.isPlaying = true;
  }

  // Anuluj odtwarzanie
  cancel() {
    this.currImage = "";
    this.currTitle = "";
    this.currSubtitle = "";
    this.progress = 0;
    this.currSong.pause();
    this.isPlaying = false;
  }

  // Rozpocznij dotyk na zakresie
  touchStart() {
    this.isTouched = true;
    this.currRangeTime = Number(this.range?.value);
  }

  // Aktualizuj pozycję w trakcie przeciągania zakresu
  touchMove() {
    const rangeValue: any = this.range?.value;
    if (rangeValue !== undefined) {
      this.currSecsText = this.sToTime(rangeValue);
    }
  }

  // Zakończ dotyk na zakresie
  touchEnd() {
    this.isTouched = false;
    this.currSong.currentTime = Number(this.range?.value);
    this.currSecsText = this.sToTime(this.currSong.currentTime);
    this.currRangeTime = Number(this.currSong.currentTime.toFixed(2).toString().substring(0, 5));
    if (this.isPlaying) {
      this.currSong.play();
    }
  }
}

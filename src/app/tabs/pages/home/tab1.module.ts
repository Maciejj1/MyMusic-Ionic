import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { LastSongsPage } from './last-songs/last-songs.page';
import { NavbarPage } from './navbar/navbar.page';
import { TopSongsPage } from './top-songs/top-songs.page';
import { LastSongsPageRoutingModule } from './last-songs/last-songs-routing.module';
import { MusicplayerPage } from 'src/app/components/musicplayer/musicplayer.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    LastSongsPageRoutingModule
  ],
  declarations: [Tab1Page, LastSongsPage, TopSongsPage ]
})
export class Tab1PageModule {}

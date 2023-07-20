import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LastSongsPageRoutingModule } from './last-songs-routing.module';

import { LastSongsPage } from './last-songs.page';
import { MusicplayerPage } from 'src/app/components/musicplayer/musicplayer.page';
import { MusicplayerPageRoutingModule } from 'src/app/components/musicplayer/musicplayer-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LastSongsPageRoutingModule,
    MusicplayerPageRoutingModule
  ],
  declarations: []
})
export class LastSongsPageModule {}

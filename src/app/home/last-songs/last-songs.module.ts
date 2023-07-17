import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LastSongsPageRoutingModule } from './last-songs-routing.module';

import { LastSongsPage } from './last-songs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LastSongsPageRoutingModule
  ],
  declarations: [LastSongsPage]
})
export class LastSongsPageModule {}

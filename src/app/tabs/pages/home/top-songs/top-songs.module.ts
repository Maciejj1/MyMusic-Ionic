import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopSongsPageRoutingModule } from './top-songs-routing.module';

import { TopSongsPage } from './top-songs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopSongsPageRoutingModule
  ],
  declarations: []
})
export class TopSongsPageModule {}

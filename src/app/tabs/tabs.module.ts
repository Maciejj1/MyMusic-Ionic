import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { SongPage } from './pages/song/song.page';
import { NavbarPage } from './pages/home/navbar/navbar.page';
import { MusicplayerPage } from '../components/musicplayer/musicplayer.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage , NavbarPage ,MusicplayerPage]
})
export class TabsPageModule {}

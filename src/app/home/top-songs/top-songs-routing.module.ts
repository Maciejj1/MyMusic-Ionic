import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopSongsPage } from './top-songs.page';

const routes: Routes = [
  {
    path: '',
    component: TopSongsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopSongsPageRoutingModule {}

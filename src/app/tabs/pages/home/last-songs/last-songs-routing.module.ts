import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LastSongsPage } from './last-songs.page';

const routes: Routes = [
  {
    path: '',
    component: LastSongsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LastSongsPageRoutingModule {}

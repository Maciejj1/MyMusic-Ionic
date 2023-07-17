import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'navbar',
    loadChildren: () => import('./navbar/navbar.module').then( m => m.NavbarPageModule)
  },
  {
    path: 'last-songs',
    loadChildren: () => import('./last-songs/last-songs.module').then( m => m.LastSongsPageModule)
  },
  {
    path: 'top-songs',
    loadChildren: () => import('./top-songs/top-songs.module').then( m => m.TopSongsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}

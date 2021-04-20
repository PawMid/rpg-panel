import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/components/home/home.component';
import { ManagePageComponent } from './components/manage-page/manage-page.component';
import { PlayerPageComponent } from './components/player-page/player-page.component';
import { PlayersComponent } from './components/players/players.component';
import { SystemHomeComponent } from './components/system-home/system-home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'#', component: HomeComponent},
  {path:'WFRP', component: SystemHomeComponent, children:[
    {path:'players', pathMatch:'full', component: PlayersComponent},
    {path:'players/:id', pathMatch:'full', component: PlayerPageComponent},
    {path:'manage', pathMatch:'full', component:ManagePageComponent}
  ]},
  {path:'CoC', component: SystemHomeComponent, children:[
    
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

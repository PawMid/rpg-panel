import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/components/home/home.component';
import { AbilitiesComponent } from './components/manage-page/abilities/abilities.component';
import { ClassesComponent } from './components/manage-page/classes/classes.component';
import { ManagePageComponent } from './components/manage-page/manage-page.component';
import { SpellsComponent } from './components/manage-page/spells/spells.component';
import { PlayerPageComponent } from './components/player-page/player-page.component';
import { PlayersComponent } from './components/players/players.component';
import { SystemHomeComponent } from './components/system-home/system-home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'#', component: HomeComponent},
  {path:'WFRP', component: SystemHomeComponent, children:[
    {path:'players', pathMatch:'full', component: PlayersComponent},
    {path:'players/:id', pathMatch:'full', component: PlayerPageComponent},
    {path:'manage', component:ManagePageComponent, children:[
      {path:'abilities', pathMatch:'full', component: AbilitiesComponent},
      {path: 'spells', pathMatch:'full', component: SpellsComponent},
      {path:'class', pathMatch:'full', component: ClassesComponent}
    ]}
  ]},
  {path:'CoC', component: SystemHomeComponent, children:[
    
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

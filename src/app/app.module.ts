import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { SystemHomeComponent } from './components/system-home/system-home.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerPageComponent } from './components/player-page/player-page.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterFormComponent } from './components/character-form/character-form.component';
import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { NavButtonChildComponent } from './components/nav-button-child/nav-button-child.component';
import { NavChildDirective } from './directives/nav-child.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SystemHomeComponent,
    PlayersComponent,
    PlayerPageComponent,
    CharacterListComponent,
    CharacterFormComponent,
    NavButtonComponent,
    NavButtonChildComponent,
    NavChildDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

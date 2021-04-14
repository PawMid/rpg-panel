import { Component } from '@angular/core';
import { ButtonsService } from './services/buttons.service';
import {SystemsServiceService} from './services/systems-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'panel-rpg';

  constructor(public systemService: SystemsServiceService, public buttonService: ButtonsService){}
  
}

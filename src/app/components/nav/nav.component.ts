import { Component, OnInit, Input, OnChanges, SimpleChanges, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Button } from 'src/app/interfaces/button';
import { ButtonsService } from 'src/app/services/buttons.service';
import { BUTTONS, BUTTONS_PROVIDER } from 'src/app/services/nav-hover.service';
import { SystemsServiceService } from 'src/app/services/systems-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers:[BUTTONS_PROVIDER]
})
export class NavComponent implements OnInit{

  @Input() system: String = '';
  buttons: Array<Button> = []

  constructor(public router: Router, @Inject(ButtonsService) private buttonsService) {
   }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes.system.previousValue != changes.system.currentValue){
      this.buttons = this.buttonsService.getNavButtons(changes.system.currentValue);
    }
  }

  // changeBackground(bgOn: boolean, index: number){
  //   if(bgOn){
  //     this.buttons[index].bg = this.system ? 'var(--' + this.system + '-sec)' : 'var(--home-sec)';
  //   } else {
  //     this.buttons[index].bg = 'none';
  //   }
  // }

  // showChildren(){

  // }

}

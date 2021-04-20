import { Component, OnInit, Input, OnChanges, SimpleChanges, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ButtonsService } from 'src/app/services/buttons.service';
import { SystemsServiceService } from 'src/app/services/systems-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

  @Input() system: String = '';
  buttons: Array<{text: String, link: String, bg:String}> = []

  constructor(public router: Router, @Inject(ButtonsService) private buttonsService) {
   }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes.system.previousValue != changes.system.currentValue){
      this.buttons = this.buttonsService.getNavButtons(changes.system.currentValue);
    }
  }

  changeBackground(bgOn: boolean, index: number){
    if(bgOn){
      this.buttons[index].bg = this.system ? 'var(--' + this.system + '-sec)' : 'var(--home-sec)';
    } else {
      this.buttons[index].bg = 'none';
    }
  }

}

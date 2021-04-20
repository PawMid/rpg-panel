import { Component, Inject, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BUTTONS } from 'src/app/services/nav-hover.service';
import { SystemsServiceService } from 'src/app/services/systems-service.service';
import {Button} from '../../interfaces/button';

@Component({
  selector: 'nav-button',
  templateUrl:'./nav-button.component.html',
  styleUrls: ['./nav-button.component.css'],
})
export class NavButtonComponent implements OnInit {

  @Input() button: Button;
  @Input() system: string = 'home';
  mouseIn: boolean = false;
  bgColor: string ;


  constructor(@Inject(BUTTONS) public hovered: Subject<Button>) {
    this.hovered.subscribe(hovered => {
      if(hovered.text == this.button.text){
        this.mouseIn = true;
        console.log(this.bgColor)
      }
    })
   }

  ngOnInit(): void {
    this.bgColor = `var(--${this.system}-sec)`
  }

  mouseLeave(){
    this.mouseIn = false;
  }

  mouseEnter(){
    this.mouseIn = true;
  }

}

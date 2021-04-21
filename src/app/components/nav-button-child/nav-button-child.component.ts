import { Component, ContentChild, HostBinding, Inject, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NavChildDirective } from 'src/app/directives/nav-child.directive';
import { Button } from 'src/app/interfaces/button';
import { ButtonsService } from 'src/app/services/buttons.service';
import { BUTTONS, BUTTONS_PROVIDER } from 'src/app/services/nav-hover.service';

@Component({
  selector: 'nav-button-child',
  templateUrl: './nav-button-child.component.html',
  styleUrls: ['./nav-button-child.component.css'],
  providers:[BUTTONS_PROVIDER]
})
export class NavButtonChildComponent implements OnInit {

  @Input() button: Button;

  constructor(private bs: ButtonsService) { }

  ngOnInit(): void {
  }

  @ContentChild(NavChildDirective)
  hovered: NavChildDirective;

  @HostBinding("style")
  get hover(){
    return this.hovered.hover ? 'background: #ababab' : 'background: none';
  }


}

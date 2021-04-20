import { Component, ContentChild, HostBinding, Input, OnInit } from '@angular/core';
import { NavChildDirective } from 'src/app/directives/nav-child.directive';
import { Button } from 'src/app/interfaces/button';

@Component({
  selector: 'nav-button-child',
  templateUrl: './nav-button-child.component.html',
  styleUrls: ['./nav-button-child.component.css']
})
export class NavButtonChildComponent implements OnInit {

  @Input() button: Button;

  constructor() { }

  ngOnInit(): void {
  }

  @ContentChild(NavChildDirective)
  hovered: NavChildDirective;

  @HostBinding("style")
  get hover(){
    console.log('inside')
    return this.hovered.hover ? 'background: #ababab' : 'background: none';
  }

}

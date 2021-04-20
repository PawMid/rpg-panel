import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[navChild]'
})
export class NavChildDirective {

  hover: boolean = false;

  constructor() { }

  @HostListener("mouseenter")
  onHover() {
    this.hover = true;
  }

  @HostListener("mouseleave")
  onLeave() {
    this.hover = false;
  }

}

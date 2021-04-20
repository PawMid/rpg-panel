import { Component, OnInit,Inject, Input } from '@angular/core';
import { Button } from 'src/app/interfaces/button';
import { BUTTONS } from 'src/app/services/nav-hover.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() button: Button;

  constructor( @Inject(BUTTONS) private clicked) { }

  ngOnInit(): void {
  }

}

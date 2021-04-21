import { Component, OnInit,Inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Button } from 'src/app/interfaces/button';
import { ButtonsService } from 'src/app/services/buttons.service';
import { BUTTONS } from 'src/app/services/nav-hover.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() button: Button;
  @Input() clicked: boolean = false;

  constructor( @Inject(BUTTONS) public clickedButton: Subject<Button>, private bs: ButtonsService) {
    this.clickedButton.subscribe(clickedBtn => {
      this.clicked = clickedBtn == this.button;
    })  
   }

  ngOnInit(): void {
   
  }

}

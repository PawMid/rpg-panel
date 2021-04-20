import { Component, Inject, OnInit } from '@angular/core';
import { Button } from 'src/app/interfaces/button';
import { ButtonsService } from 'src/app/services/buttons.service';
import { BUTTONS, BUTTONS_PROVIDER } from 'src/app/services/nav-hover.service';
import { SystemsServiceService } from 'src/app/services/systems-service.service';

@Component({
  selector: 'app-manage-page',
  templateUrl: './manage-page.component.html',
  styleUrls: ['./manage-page.component.css'],
  providers:[BUTTONS_PROVIDER]
})
export class ManagePageComponent implements OnInit {

  system: string;
  buttons: Array<Button>;
  constructor(private systemService: SystemsServiceService,private btnService: ButtonsService) {
   }

  ngOnInit(): void {
    this.system = this.systemService.getCurrentSystem();
    this.buttons = this.btnService.getButtonChildren(this.system, 'Manage')
  }

}

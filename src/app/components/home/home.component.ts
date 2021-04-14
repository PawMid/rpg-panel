import { Component, OnInit } from '@angular/core';
import {SystemsServiceService} from '../../services/systems-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  systems: any;

  constructor(private systemService: SystemsServiceService) {
    this.systems = this.systemService.getSystems();
   }

  ngOnInit(): void {
  }

}

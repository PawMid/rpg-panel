import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-system-home',
  templateUrl: './system-home.component.html',
  styleUrls: ['./system-home.component.css']
})
export class SystemHomeComponent implements OnInit {


  constructor(private router: Router) {
   }

  ngOnInit(): void {
  }

  checkHome(){
    return this.router.url.split('/').length <= 2
  }

}

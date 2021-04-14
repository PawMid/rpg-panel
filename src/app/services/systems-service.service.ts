import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemsServiceService {

  systems: Array<{name: String, acronym: String}> = [
    {
      name: "Warhammer Fantasy Role Play",
      acronym: "WFRP"
    },
    {
      name: "Call of Chtulhu",
      acronym: "CoC"
    }
  ];

  constructor(private router: Router) { }

  getSystems(){
    return this.systems;
  }

  getCurrentSystem(){
    return this.router.url.split('/')[1];
  }
}

import { Injectable } from '@angular/core';
import { SystemsServiceService } from './systems-service.service';
import {_} from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ButtonsService {

  navButtons: Array<{text: String, link: String, bg:String}> = [
    {
      text: "About",
      link:'/about',
      bg:'none'
    },
    // {
    //   text: "Login",
    //   link: "/login",
    //   bg:'none'
    // },
    
  ]

  commonNavButtons: Array<{text: String, link: String, bg:String}> = [
    {
      text: "Home",
      link: "",
      bg:'none'
    },
    {
      text: "Players",
      link:'players',
      bg:'none'
    },
    {
      text: "Characters",
      link: "characters",
      bg:'none'
    },
    {
      text: "Monsters",
      link:'monsters',
      bg:'none'
    },
    {
      text: "Abilities",
      link: "abilities",
      bg:'none'
    },
  ]

  wfrpNavButtons:  Array<{text: String, link: String}> = [
    {
      text: "Spells",
      link: "/WFRP/spells"
    }
  ]

  constructor(private systemService: SystemsServiceService) { }

  getNavButtons(system: String){
    let buttons = [];
    if(system){
      
      for(let i = 0; i < this.commonNavButtons.length; i++){
        buttons.push({
          text:this.commonNavButtons[i].text,
          link: system + "/" + this.commonNavButtons[i].link,
          bg:'none'
        })
      }
      if(system === 'WFRP'){
        buttons = buttons.concat(this.wfrpNavButtons)
      }
    }

    
    
    return buttons.concat(this.navButtons);
  }
}

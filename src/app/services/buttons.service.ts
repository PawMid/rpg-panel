import { Injectable, InjectionToken } from '@angular/core';
import { SystemsServiceService } from './systems-service.service';
import {_} from 'lodash';

interface Button {
  text: string;
  link: string;
  bg: string;
  children?: Array<Button>;
}


const navButtons: Array<Button> = [
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

const commonNavButtons: Array<Button> = [
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
]

const wfrpNavButtons:  Array<Button> = [
  {
    text: "Manage",
    link: "/mange",
    bg: "none",
    children: [
      {
        text: "Abilities",
        link: "abilities",
        bg:'none'
      },
      {
        text: "Spells",
        link: "/WFRP/spells",
        bg:"none"
      }
    ]
  }
]

@Injectable({
  providedIn: 'root',
})
export class ButtonsService {

  getNavButtons(system: String){
    let buttons = [];
    if(system){
      
      for(let i = 0; i < commonNavButtons.length; i++){
        buttons.push({
          text:commonNavButtons[i].text,
          link: system + "/" + commonNavButtons[i].link,
          bg:'none'
        })
      }
      if(system === 'WFRP'){
        buttons = buttons.concat(wfrpNavButtons)
      }
    }
    return buttons.concat(navButtons);
  }
}

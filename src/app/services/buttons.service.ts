import { Injectable } from '@angular/core';
import { _ } from 'lodash';
import { Button } from '../interfaces/button';
import {faBook, faHandSparkles, faUserAstronaut} from '@fortawesome/free-solid-svg-icons'


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
    link: "/WFRP/manage",
    bg: "none",
    children: [
      {
        text: "Abilities",
        link: "/WFRP/manage/abilities",
        bg:'none',
        icon: faHandSparkles
        
      },
      {
        text: "Spells",
        link: "/WFRP/manage/spells",
        bg:"none",
        icon: faBook
      },
      {
        text: "Classes",
        link: "/WFRP/manage/class",
        bg:"none",
        icon: faUserAstronaut
      }
    ]
  }
]

let lastClicked: Button = undefined;

@Injectable({
  providedIn: 'root',
})
export class ButtonsService {

  getLastClikced(): Button{
    return lastClicked;
  }

  setLastClicked(clicked: Button){
    lastClicked = clicked;
    console.log(lastClicked);
  }

  getNavButtons(system: String){
    let buttons = [];
    if(system !== 'home'){
      
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
    } else {
      buttons = navButtons;
    }
    return buttons;
  }

  getButtonChildren(system: string, button: string){
    if(system == 'WFRP'){
      return wfrpNavButtons.filter(btn => {
        return btn.text == button;
      })[0].children;
    }
  }
}

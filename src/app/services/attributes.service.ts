import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttributesService {

  private wfrpFullAttribNames: Map<string, string>;

  constructor() {
      this.wfrpFullAttribNames = new Map();
      this.initWfrpFullNames();
   }

   getAttributes(system: string){
     if(system == 'WFRP'){
       return this.getWfrpAttributes();
     }
   }

   getFullAttribName(system: string, attrib: string){
     if(system == 'WFRP'){
       return this.getFullWfrpAttribName(attrib);
     }
   }

  private getWfrpAttributes(){
    return {
      primary:{
        ws:0,
        bs:0,
        s:0,
        t:0,
        ag:0,
        int:0,
        wp:0,
        fel:0
      },
      secondary:{
        a:0,
        w:0,
        sb:0,
        tb:0,
        m:0,
        mag:0,
        ip:0,
        fp:0
      }
    };
  }

  private getFullWfrpAttribName(attrib: string){
    return this.wfrpFullAttribNames.get(attrib);
  }

  private initWfrpFullNames(){
    this.wfrpFullAttribNames.set('ws', 'Weapon Skill');
    this.wfrpFullAttribNames.set('bs', 'Ballistic Skill');
    this.wfrpFullAttribNames.set('s', 'Strength');
    this.wfrpFullAttribNames.set('t', 'Toughness');
    this.wfrpFullAttribNames.set('ag', 'Agility');
    this.wfrpFullAttribNames.set('int', 'Intelligence');
    this.wfrpFullAttribNames.set('wp', 'Will Power');
    this.wfrpFullAttribNames.set('fel', 'Fellowship');
    this.wfrpFullAttribNames.set('a', 'Attacks');
    this.wfrpFullAttribNames.set('w', 'Wounds');
    this.wfrpFullAttribNames.set('sb', 'Strength Bonus');
    this.wfrpFullAttribNames.set('tb', 'Toughness Bonus');
    this.wfrpFullAttribNames.set('m', 'Movement');
    this.wfrpFullAttribNames.set('mag', 'Magic');
    this.wfrpFullAttribNames.set('ip', 'Insanity Points');
    this.wfrpFullAttribNames.set('fp', 'Fate Points');
  }

}

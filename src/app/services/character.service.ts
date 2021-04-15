import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {wfrpBackend} from './url';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private client: HttpClient) { }

  deleteCharacter(system: String, characterId: string){
    let url: string;
    if(system === 'WFRP'){
    url = `${wfrpBackend}character/${characterId}`;
    }
      return this.client.delete(url);
  }

}

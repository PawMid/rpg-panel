import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {wfrpBackend} from './url';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private client: HttpClient) { }

  getPlayers(system: String, search:String){
    if(system === 'WFRP'){
      return this.client.get(`${wfrpBackend}player/?search=${search}`)
    }
  }

  addPlayer(system: String, playerData: any){
    if(system === 'WFRP'){
      return this.client.post(`${wfrpBackend}player/add`, {player: playerData});
    }
  }

  delPlayer(system: String, playerId: String){
    if(system === 'WFRP'){
      let player = undefined;
      if(playerId){
        player = {id: playerId}
      }
      return this.client.request('delete', `${wfrpBackend}player/del`, {body: {player}})
    }
  }

  getPlayerDetails(system: String, id: String){
    if(system === 'WFRP'){
      return this.client.get(`${wfrpBackend}player/${id}`)
    }
  }

  updatePlayer(system: string, id:string, playerData: any){
    if(system === 'WFRP'){
      return this.client.put(`${wfrpBackend}player/${id}`, {name: playerData.name, lastName: playerData.lastName})
    }
  }
}

import { Component, OnInit, Input } from '@angular/core';
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'
import { CharacterService } from 'src/app/services/character.service';
import { SystemsServiceService } from 'src/app/services/systems-service.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  @Input() list: Array<any> = undefined;
  @Input() emptyMessage: string = 'This player has no characters yet.'
  @Input() editLink: string = undefined;
  @Input() deleteService: string = undefined;
  faTrash = faTrash;
  faEdit = faEdit;

  constructor(private characterService: CharacterService, private systemService: SystemsServiceService) { }

  ngOnInit(): void {

  }

  handleDelete(id: string){
    if(this.deleteService == 'character')
      this.characterService.deleteCharacter(this.systemService.getCurrentSystem(), id).subscribe(Response => {});
  }

}

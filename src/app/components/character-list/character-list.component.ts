import { Component, OnInit, Input } from '@angular/core';
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  @Input() list: Array<any> = undefined;
  @Input() emptyMessage: string = 'This player has no characters yet.'
  @Input() editLink: string = undefined;
  @Input() deleteSrevice: string = undefined;
  faTrash = faTrash;
  faEdit = faEdit;

  constructor() { }

  ngOnInit(): void {
  }

  handleDelete(){
    
  }

}

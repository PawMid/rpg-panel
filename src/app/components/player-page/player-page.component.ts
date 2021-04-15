import { Component, OnInit } from '@angular/core';
import { SystemsServiceService } from 'src/app/services/systems-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import {ActivatedRoute} from '@angular/router';
import {faEdit, faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {wfrpBackend} from '../../services/url';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.css']
})
export class PlayerPageComponent implements OnInit {

  id: string = '';
  playerData: any = undefined;
  characters: Array<any> = undefined;
  faEdit = faEdit;
  faCheck = faCheck;
  faTimes = faTimes;
  edit: boolean = false;
  playerForm: FormGroup;
  characterLink: string;
  deleteType: string = 'character';
  system: string;

  constructor(private playerService: UserServiceService, private systemService: SystemsServiceService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.playerService.getPlayerDetails(this.systemService.getCurrentSystem(), this.id).subscribe((response:any) => {
        this.playerData = response.player;
        this.characters = response.characters.length > 0 ? response.characters : undefined; 
        this.resetForm();
      })
    })
    this.system = this.systemService.getCurrentSystem();
    this.characterLink = '/' + this.system + '/characters';
  }

  toggleEdit(){
    this.edit = !this.edit;
  }

  enableForm(){
    this.toggleEdit();
  }

  handleSave(){
    if(this.playerForm.valid){
      this.playerData.name = this.playerForm.controls.name.value;
      this.playerData.lastName = this.playerForm.controls.lastName.value;
      this.playerService.updatePlayer(this.systemService.getCurrentSystem(), this.playerData._id, this.playerData).subscribe((response:any)=>{
        this.toggleEdit();
      })
    }
  }

  handleCancel(){
    this.toggleEdit();
    this.resetForm();
  }

  resetForm(){
    this.playerForm = this.formBuilder.group({
      name: [this.playerData.name, Validators.required],
      lastName: [this.playerData.lastName, Validators.required]
    })
  }

}

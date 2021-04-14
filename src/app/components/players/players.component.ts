import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import {faEdit, faTrash, faSearch} from '@fortawesome/free-solid-svg-icons'
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SystemsServiceService } from 'src/app/services/systems-service.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: any = undefined;
  faEdit = faEdit;
  delete = faTrash;
  faSearch = faSearch;
  searchForm: FormGroup;
  newPlayerForm: FormGroup;
  playerFormSubmited: boolean = false;
  submitMessage: String = '';

  constructor(private playerService: UserServiceService, private formBuilder: FormBuilder, private systemSrevice: SystemsServiceService) {
    
   }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchString: ['']
    })
    this.newPlayerForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required]
    })
    this.searchPlayers();
  }

  searchPlayers(){
    this.playerService.getPlayers(this.systemSrevice.getCurrentSystem(), this.searchForm.controls.searchString.value).subscribe((data:any) => {
      this.players = data.players;
    })
  }

  addPlayer(){
    this.playerFormSubmited = true;
    if(this.newPlayerForm.valid){
      let body: any = {
          name: this.newPlayerForm.controls.name.value,
          lastName: this.newPlayerForm.controls.lastName.value
      }
      this.playerService.addPlayer(this.systemSrevice.getCurrentSystem(), body)
        .subscribe((response: any) => {
          this.submitMessage = response.msg;
          this.resetForm();
        },
        (err:any)=>{
          if(err.status === 403){
            this.submitMessage = err.error.err;
          }
        })
      
    }
  }
  
  resetForm(){
    this.playerFormSubmited = false;
    this.newPlayerForm.reset();
  }

  deletePlayer(id: string){
    this.playerService.delPlayer(this.systemSrevice.getCurrentSystem(), id).subscribe(resp => {
      this.searchPlayers();
    });
  }

}

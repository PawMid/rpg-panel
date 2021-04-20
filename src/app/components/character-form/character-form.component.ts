import { KeyValuePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormArray, Validators, FormBuilder, FormControl} from '@angular/forms';
import { AttributesService } from 'src/app/services/attributes.service';
import { SystemsServiceService } from 'src/app/services/systems-service.service';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css']
})


export class CharacterFormComponent implements OnInit {

  characterForm: FormGroup;
  system: string;
  attributes: any;
  primaryNames: Array<string> = [];
  primaryValues: FormArray = new FormArray([]);
  secondaryNames:Array<string> = [];
  secondaryValues: FormArray = new FormArray([]);

  constructor(private formBuilder: FormBuilder, private systemService: SystemsServiceService, public attributeService: AttributesService) {
    this.system = this.systemService.getCurrentSystem();
    this.attributes = this.attributeService.getAttributes(this.system);
    this.createAttributeArrays();
  }

  ngOnInit(): void {
    
    this.createForm();
  }

  handleSave(){
    console.log('attribues', 'primary', this.primaryValues.valid)
  }

  private createAttributeArrays(){
    for(let [key, value] of Object.entries(this.attributes.primary)) {
      this.primaryNames.push(key);
      this.primaryValues.push(new FormControl(value,[ Validators.min(0), Validators.max(99)]))
    }
    for(let [key, value] of Object.entries(this.attributes.secondary)) {
      this.secondaryNames.push(key);
      this.secondaryValues.push(new FormControl(value,[ Validators.min(0), Validators.max(99)]))
    }

  }

  private createForm(){
    if(this.system == 'WFRP'){
      this.characterForm = this.formBuilder.group({
        characterName: ['', [Validators.required, Validators.pattern('/[^!@$%^&\*\(\)]/g')]],
        characterRace: ['', Validators.required],
        primary: this.primaryValues
      });
      
    }
  }
}

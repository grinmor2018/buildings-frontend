import { Component, OnInit } from '@angular/core';

import { Ambit } from '../../interfaces/Ambit';
import { BuildingsService } from '../../services/buildings.service';

@Component({
  templateUrl: './form-ambits.component.html'
})
export class FormAmbitsComponent {

  item: Ambit = {
    code: '',
    name: ''
  };

  constructor(private buildingService: BuildingsService) { }

  ngOnInit(){
  }

  submitItem() {
    console.log(this.item);
    this.buildingService.createAmbit(this.item)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }



}

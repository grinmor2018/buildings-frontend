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

  ambits: Ambit[]= [];

  constructor(private buildingService: BuildingsService) { }

  ngOnInit(): void {
    this.getItems();
    console.log(this.ambits);
  }

  getItems(){
    this.buildingService.getAmbits()
    .subscribe(
      (data: Ambit[]) => {
        this.ambits= data;
        console.log(data);
      },
      err => console.log(err)
    )
  }

  submitItem(){
    console.log(this.item);
    this.buildingService.createAmbit(this.item)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }



}

import { Component, OnInit } from '@angular/core';

import { BuildingsService } from '../../services/buildings.service';

@Component({
  selector: 'app-llista-buildings',
  templateUrl: './llista-buildings.component.html',
  styleUrls: ['./llista-buildings.component.css']
})
export class LlistaBuildingsComponent implements OnInit {

  constructor( private buildingService: BuildingsService) { }

  ngOnInit(): void {
    this.getBuildings();
  }

  getBuildings(){
    this.buildingService.getBuildings()
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}

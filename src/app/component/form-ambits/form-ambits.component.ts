import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Ambit } from '../../interfaces/Ambit';
import { BuildingsService } from '../../services/buildings.service';

@Component({

  selector: 'app-form-ambits',
  templateUrl: './form-ambits.component.html',
  styleUrls: ['./form-ambits.component.css']
})
export class FormAmbitsComponent implements OnInit {

  item: Ambit = {
    code: '',
    name: ''
  };

  items: Ambit[]= [];

  editing: boolean = false;

  constructor(
    private buildingService: BuildingsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.buildingService.getAmbit(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.item = res;
            this.editing = true;
          },
          err => console.log(err)
        )
    }
    this.getItems();
  }

  getItems(){
    this.buildingService.getAmbits()
    .subscribe(
      res => {
        this.items = res;
        console.log(res);
        console.log(this.items);
      },
      err => console.log(err)
    )
  }

  submitItem(){
    console.log(this.item);
    this.buildingService.createAmbit(this.item)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/component/ambits']);
      },
      err => console.log(err)
    )
  }

  deleteItem(id: string){
    this.buildingService.deleteAmbit(id)
    .subscribe(
      res => {
        this.getItems();
      },
      err => console.log(err)
    )
  }

  editItem(){
    delete this.item.createdAt;
    this.buildingService.updateAmbit(this.item._id, this.item)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/component/ambits']);
      },
      err => console.log(err)
    )
  }



}

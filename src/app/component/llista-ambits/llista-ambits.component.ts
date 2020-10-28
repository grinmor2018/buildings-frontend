import { Component, OnInit } from '@angular/core';

import { Ambit } from '../../interfaces/Ambit';
import { RespostasService } from '../../services/respostas.service';

@Component({
  selector: 'app-llista-ambits',
  templateUrl: './llista-ambits.component.html',
  styleUrls: ['./llista-ambits.component.css']
})
export class LlistaAmbitsComponent implements OnInit {

  constructor(private respostasService: RespostasService) { }

  items : Ambit[] = []

  ngOnInit(): void {
    this.getItems();
  }

  getItems(){
    this.respostasService.getAmbits()
    .subscribe(
      res => {
        this.items = res;
        console.log(res);
        console.log(this.items);
      },
      err => console.log(err)
    )
  }

  deleteItem(id: string){
    this.respostasService.deleteAmbit(id)
    .subscribe(
      res => {
        this.getItems();
      },
      err => console.log(err)
    )
  }

}

import { Component, OnInit } from '@angular/core';

import { Servespe } from '../../interfaces/Servespe';
import { RespostasService } from '../../services/respostas.service';

@Component({
  selector: 'app-llista-servespes',
  templateUrl: './llista-servespes.component.html',
  styleUrls: ['./llista-servespes.component.css']
})
export class LlistaServespesComponent implements OnInit {

  constructor(private respostasService: RespostasService) { }

  items: Servespe[] = []

  ngOnInit(): void {
    this.getItems();
  }

  getItems(){
    this.respostasService.getServespes()
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
    this.respostasService.deleteServespe(id)
    .subscribe(
      res => {
        this.getItems();
      },
      err => console.log(err)
    )
  }

}


import { Component, OnInit } from '@angular/core';

import { Resposta } from '../../interfaces/Resposta';
import { RespostasService } from '../../services/respostas.service';

@Component({
  selector: 'app-llista-respostas',
  templateUrl: './llista-respostas.component.html',
  styleUrls: ['./llista-respostas.component.css']
})
export class LlistaRespostasComponent implements OnInit {

  constructor(private respostaService: RespostasService) { }

  items : Resposta[] = []

  ngOnInit(): void {
    this.getItems();
  }

  getItems(){
    this.respostaService.getRespostas()
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
    this.respostaService.deleteResposta(id)
    .subscribe(
      res => {
        this.getItems();
      },
      err => console.log(err)
    )
  }

}

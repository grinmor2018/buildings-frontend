import { Component, OnInit } from '@angular/core';
import { Waitingroom } from 'src/app/interfaces/Waitingroom';

@Component({
  selector: 'app-form-waitingrooms',
  templateUrl: './form-waitingrooms.component.html',
  styleUrls: ['./form-waitingrooms.component.css']
})
export class FormWaitingroomsComponent implements OnInit {

  item: Waitingroom = {
    code: '',
    name: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  submitItem(){
    console.log(this.item);
  }
}

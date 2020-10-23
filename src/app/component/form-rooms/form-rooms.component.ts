import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/interfaces/Room';

@Component({
  selector: 'app-form-rooms',
  templateUrl: './form-rooms.component.html',
  styleUrls: ['./form-rooms.component.css']
})
export class FormRoomsComponent implements OnInit {

  item: Room = {
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

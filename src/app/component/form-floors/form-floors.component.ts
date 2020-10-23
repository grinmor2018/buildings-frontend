import { Component, OnInit } from '@angular/core';
import { Floor } from 'src/app/interfaces/Floor';

@Component({
  selector: 'app-form-floors',
  templateUrl: './form-floors.component.html',
  styleUrls: ['./form-floors.component.css']
})
export class FormFloorsComponent implements OnInit {

  item: Floor = {
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

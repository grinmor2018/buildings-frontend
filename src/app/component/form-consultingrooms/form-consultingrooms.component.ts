import { Component, OnInit } from '@angular/core';
import { Consultingroom } from 'src/app/interfaces/Consultingroom';

@Component({
  selector: 'app-form-consultingrooms',
  templateUrl: './form-consultingrooms.component.html',
  styleUrls: ['./form-consultingrooms.component.css']
})
export class FormConsultingroomsComponent implements OnInit {

  item: Consultingroom = {
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

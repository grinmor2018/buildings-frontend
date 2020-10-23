import { Component, OnInit } from '@angular/core';
import { Servicespeciality } from 'src/app/interfaces/Servicespeciality';

@Component({
  selector: 'app-form-servicespecialities',
  templateUrl: './form-servicespecialities.component.html',
  styleUrls: ['./form-servicespecialities.component.css']
})
export class FormServicespecialitiesComponent implements OnInit {

  item: Servicespeciality = {
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

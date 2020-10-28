import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { Servespe } from "../../interfaces/Servespe";
import { RespostasService } from "../../services/respostas.service";

@Component({
  selector: 'app-form-servespes',
  templateUrl: './form-servespes.component.html',
  styleUrls: ['./form-servespes.component.css']
})
export class FormServespesComponent implements OnInit {

  item: Servespe = {
    nomservei:"",
    hab_cons: ""
  };

  items: Servespe[] = [];

  editing: boolean = false;

  constructor(
    public respostasService: RespostasService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getItems();
    this.editing = false;
  }

  getItems() {
    this.respostasService.getServespes().subscribe(
      (res) => {
        this.items = res;
        console.log(res);
        console.log(this.items);
      },
      (err) => console.log(err)
    );
  }

  getItem(id: string) {
    this.respostasService.getServespe(id).subscribe(
      (res) => {
        this.item = res;
        console.log(this.item);
      },
      (err) => console.log(err)
    );
  }

  submitItem() {
    this.item = this.respostasService.selectedServespe;
    console.log(this.item);
    this.respostasService.createServespe(this.item)
    .subscribe(
      (res) => {
        console.log(res);
        this.editing= false;
        this.getItems();
      },
      (err) => console.log(err)
    );
  }

  deleteItem(id: string) {
    if (confirm("Are you sure to delete?")) {
      this.respostasService.deleteServespe(id).subscribe(
        (res) => {
          this.getItems();
          this.resetForm();
        },
        (err) => console.log(err)
      );
    }
  }

  editItem() {
    this.item = this.respostasService.selectedServespe;
    console.log(this.item);
    this.respostasService.updateServespe(this.item._id, this.item)
    .subscribe(
      (res) => {
        console.log(res);
        this.getItems();
        this.editing= false;
        this.respostasService.selectedServespe={
          nomservei: "",
          hab_cons: "",
        };
      },
      (err) => console.log(err)
    );
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
  }

  preEditItem(servespe: Servespe): void {
    this.respostasService.selectedServespe = Object.assign({}, servespe);
    this.editing = true;
  }
}

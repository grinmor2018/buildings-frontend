import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { Ambit } from "../../interfaces/Ambit";
import { RespostasService } from "../../services/respostas.service";

@Component({
  selector: "app-form-ambits",
  templateUrl: "./form-ambits.component.html",
  styleUrls: ["./form-ambits.component.css"],
})
export class FormAmbitsComponent implements OnInit {
  item: Ambit = {
    _id:"",
    code: "",
    name: "",
  };

  items: Ambit[] = [];

  editing: boolean = false;

  constructor(
    public respostasService: RespostasService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getItems();
    this.editing = false;
  }

  getItems() {
    this.respostasService.getAmbits().subscribe(
      (res) => {
        this.items = res;
        console.log(res);
        console.log(this.items);
      },
      (err) => console.log(err)
    );
  }

  getItem(id: string) {
    this.respostasService.getAmbit(id).subscribe(
      (res) => {
        this.item = res;
        console.log(this.item);
      },
      (err) => console.log(err)
    );
  }

  submitItem() {
    this.item = this.respostasService.selectedAmbit;
    console.log(this.item);
    this.respostasService.createAmbit(this.item)
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
      this.respostasService.deleteAmbit(id).subscribe(
        (res) => {
          this.getItems();
          this.resetForm();
        },
        (err) => console.log(err)
      );
    }
  }

  editItem() {
    this.item = this.respostasService.selectedAmbit;
    console.log(this.item);
    this.respostasService.updateAmbit(this.item._id, this.item)
    .subscribe(
      (res) => {
        console.log(res);
        this.getItems();
        this.editing= false;
        this.respostasService.selectedAmbit={
          _id:"",
          code: "",
          name: "",
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

  preEditItem(ambit: Ambit): void {
    this.respostasService.selectedAmbit = Object.assign({}, ambit);
    this.editing = true;
  }
}

import { Component, OnInit } from "@angular/core";

import { Title } from "@angular/platform-browser";
import { Router, NavigationEnd, ActivatedRoute, Data } from "@angular/router";
import { filter, map, mergeMap } from "rxjs/operators";

import { RespostasService } from "../../services/respostas.service";

import { Ambit } from '../../interfaces/Ambit';

@Component({
  selector: "app-form-manteniment",
  templateUrl: "./form-manteniment.component.html",
  styleUrls: ["./form-manteniment.component.css"],
})
export class FormMantenimentComponent implements OnInit {

  pageInfo: Data = Object.create(null);

  item: Ambit = {
    code: '',
    name:''
  };

  constructor(
    private respostasService: RespostasService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
    ) {
      this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .pipe(filter((route) => route.outlet === "primary"))
      .pipe(mergeMap((route) => route.data))
      .subscribe((event: Data) => {
        this.titleService.setTitle(event["title"]);
        this.pageInfo = event;
      });
    }

  ngOnInit(): void {

  }

  submitItem(){
    console.log(this.item);
  }

  getBuildings() {
    this.respostasService.getEdificis().subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}

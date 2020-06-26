import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

declare function init_adminlte_theme();

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  anio: number = new Date().getFullYear();

  constructor(public location: Location) { }

  ngOnInit(): void {
     init_adminlte_theme();
  }

}

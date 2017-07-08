import { Component, OnInit } from '@angular/core';
import { IvoRojas } from "app/class/ivo-rojas";

@Component({
  selector: 'app-ivo-rojas',
  templateUrl: './ivo-rojas.component.html',
  styleUrls: ['./ivo-rojas.component.css']
})
export class IvoRojasComponent implements OnInit {
  ivoRojas:IvoRojas;
  constructor() {
    this.ivoRojas = new IvoRojas();
    this.ivoRojas.name = 'xD';
    this.ivoRojas.age = 20;
  }

  ngOnInit() {
    
  }
}

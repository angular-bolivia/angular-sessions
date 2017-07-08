import { Component, OnInit } from '@angular/core';
import { IvoRojas } from "app/class/ivo-rojas";
import { University } from "app/class/university";

@Component({
  selector: 'app-ivo-rojas',
  templateUrl: './ivo-rojas.component.html',
  styleUrls: ['./ivo-rojas.component.css']
})
export class IvoRojasComponent implements OnInit {
  datos:IvoRojas;
  persons:Array<IvoRojas>;

  constructor() { 
    this.datos = new IvoRojas();
    this.datos.height = 160;
    this.datos.name = 'ivo';
    this.datos.university = new University();
      this.datos.university.addres = 'oquendo';
      this.datos.university.name = 'san simon';

    let datos2 = new IvoRojas();
    datos2.height = 120;
    datos2.name = 'carlos';
    this.persons = [this.datos,datos2]; 
    
  }

  ngOnInit() {
console.log('Datos:',this.datos);
  }

}

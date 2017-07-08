import { Component, OnInit } from '@angular/core';
import { Person } from "app/class/person";
import { University } from "app/class/university";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent implements OnInit {
  person:Person;
  
  constructor() { 
    this.person = new Person();
    this.person.height = 190;
    this.person.name = 'John Papa';
    this.person.university = new University();
    this.person.university.addres = 'Oquendo';
    this.person.university.name = 'San Simón';
  }

  ngOnInit() {
  }
}

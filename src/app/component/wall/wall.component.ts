import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
  isOn:boolean;
  constructor() {
    this.isOn = false;
  }

  ngOnInit() {
  }
  toggleSwitch(event){
    this.isOn = event;
    console.log("wall: -switch Status: ",event);
  }

}

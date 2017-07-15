import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  
  isOn:boolean;

  constructor() {
    this.isOn = false;
  }

  ngOnInit() {
  }
  toggleSwitch(){
    this.isOn = !this.isOn;
  }
}

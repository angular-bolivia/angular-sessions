import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  @Output() toggleSwitch = new EventEmitter<boolean>();
  isOn:boolean;

  constructor() {
    this.isOn = false;
  }

  ngOnInit() {
  }
  toggleSwitchLocal(){
    this.isOn = !this.isOn;
    this.toggleSwitch.emit(this.isOn);
  }
}

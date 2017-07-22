import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LightSwitchService } from "app/light-switch.service";

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  @Output() toggleSwitch = new EventEmitter<boolean>();
  isOn:boolean;
  name:string;
  constructor(private lightSwitchService:LightSwitchService) {
    this.isOn = false;
    this.name = lightSwitchService.name;
  }

  ngOnInit() {
    this.lightSwitchService.isOn.subscribe(
      (result) => {
        this.isOn = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  toggleSwitchLocal(){
    this.isOn = !this.isOn;
    this.toggleSwitch.emit(this.isOn);
    this.lightSwitchService.setName("XD");
    // this.lightSwitchService.getName();

    
  }
}

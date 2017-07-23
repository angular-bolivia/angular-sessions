import { Component, OnInit } from '@angular/core';
import { LightSwitchService } from "app/light-switch.service";

@Component({
  selector: 'app-light-bulb',
  templateUrl: './light-bulb.component.html',
  styleUrls: ['./light-bulb.component.css']
})
export class LightBulbComponent implements OnInit {
  
  isOn:boolean; 
  
  constructor(private lightSwitchService:LightSwitchService) { 
    this.isOn = false;
  }

  ngOnInit() {
    this.lightSwitchService.isOn.subscribe(
      (result) => {
        this.isOn = result;
      }
    )

  }

}

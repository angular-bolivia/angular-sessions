import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class LightSwitchService {
  name:string;
  isOn:BehaviorSubject<boolean>;
  constructor() { 
    this.name = 'SWITCH1';
    this.isOn = new BehaviorSubject(false);
  }
  setName(newName:string){
    this.name = newName;
  };
  getName():string{
    return this.name;
  };

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonComponent } from './component/person/person.component';
import { LightBulbComponent } from './component/light-bulb/light-bulb.component';
import { SwitchComponent } from './component/switch/switch.component';
import { WallComponent } from './component/wall/wall.component';
import { CeilingComponent } from './component/ceiling/ceiling.component';
import { RoomComponent } from './component/room/room.component';
import { LightSwitchService } from "app/light-switch.service";


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    LightBulbComponent,
    SwitchComponent,
    WallComponent,
    CeilingComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LightSwitchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { PersonComponent } from './component/person/person.component';
import { LightBulbComponent } from './component/light-bulb/light-bulb.component';
import { SwitchComponent } from './component/switch/switch.component';
import { WallComponent } from './component/wall/wall.component';
import { CeilingComponent } from './component/ceiling/ceiling.component';
import { RoomComponent } from './component/room/room.component';
import { LightSwitchService } from "app/light-switch.service";



const appRoutes: Routes = [
  { path: '', component:  RoomComponent },
  { path: 'light', component: LightBulbComponent }
];



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
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [LightSwitchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

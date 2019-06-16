import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-habitable-zone',
  templateUrl: './habitable-zone.component.html',
  styleUrls: ['./habitable-zone.component.scss']
})

export class HabitableZoneComponent implements OnInit {
  myData: Array<{
    planetName: string,
    habitabel: number
  }> = [];


  constructor(private store: StoreService) { }

  ngOnInit() {
    this.initData();
  }

  async initData() {

    let planeten = await this.store.getPlaneten();
    let habitabel = await this.store.getHabitableZone();
    for(let i = 0; i < planeten.length; i++) {
      this.myData.push({
        planetName : planeten[i].PlanetName,
        habitabel : habitabel[0][i].get('fk_HabitableZone(Planet_ID)')
      });
    }

    console.log(this.myData);
  }

}

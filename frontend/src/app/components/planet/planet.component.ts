import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../services/store.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  selectedPlanet = {
    Planet_ID : 0,
    PlanetName: "--------",
    Masse: 0,
    Durchmesser: 0,
    Dichte : 0,
    Aphel: 0,
    Periphel: 0,
    Planetensystem_ID: 0,
  };

  planeten = [];
  displayedColumns: string[] = ['Planet_ID', 'PlanetName', 'Masse', 'Durchmesser', 'Dichte', 'Aphel', 'Periphel'];


  constructor(private store: StoreService) { }

  ngOnInit() {
    this.store.getPlaneten().then(system => {
      console.log(system);
      this.planeten = system;
    });
  }

  selectPlanet(row: any) {

    this.selectedPlanet = row;
  }

  updatePlanet() {
    this.store.updatePlanet(this.selectedPlanet).then(result => {
      console.log(result);
      for(let p of this.planeten) {
        if(p.Planet_ID == this.selectedPlanet.Planet_ID) {
          p = this.selectedPlanet;
        }
      }
    })
  }

  deletePlanet() {
    this.store.deletePlanet(this.selectedPlanet).then(result => {
      console.log(result);
      this.planeten = this.planeten.filter(p => {
        return p.Planet_ID != this.selectedPlanet.Planet_ID;
      })
    })
  }

  createPlanet() {
    delete this.selectedPlanet.Planet_ID;
    this.store.createPlanet(this.selectedPlanet).then((result:any) => {
      console.log(result);
      this.planeten.push(result.planet);
    })
  }

}

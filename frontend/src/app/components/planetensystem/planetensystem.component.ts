import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../services/store.service';

@Component({
  selector: 'app-planetensystem',
  templateUrl: './planetensystem.component.html',
  styleUrls: ['./planetensystem.component.scss']
})
export class PlanetensystemComponent implements OnInit {
  planetesysteme = [];
  displayedColumns: string[] = ['Planetensystem_ID', 'PlanetensystemName', 'Masse', 'AnzahlDerPlaneten'];


  constructor(private store: StoreService) { }

  ngOnInit() {
    this.store.getPlanetensysteme().then(system => {
      console.log(system);
      this.planetesysteme = system;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../services/store.service';

@Component({
  selector: 'app-zwergplanet',
  templateUrl: './zwergplanet.component.html',
  styleUrls: ['./zwergplanet.component.scss']
})
export class ZwergplanetComponent implements OnInit {
  zwergplaneten = [];
  displayedColumns: string[] = ['Zwergplanet_ID', 'PlanetName', 'Masse', 'Durchmesser', 'Dichte', 'Aphel', 'Periphel', 'anzahlHimmelskoerper'];


  constructor(private store: StoreService) { }

  ngOnInit() {
    this.store.getZwergPlaneten().then(system => {
      console.log(system);
      this.zwergplaneten = system;
    });
  }

}

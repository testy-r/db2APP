import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../services/store.service';

@Component({
  selector: 'app-mond',
  templateUrl: './mond.component.html',
  styleUrls: ['./mond.component.scss']
})
export class MondComponent implements OnInit {
  monde = [];
  displayedColumns: string[] = ['Mond_ID', 'MondName', 'Bahnperiode', 'Masse'];


  constructor(private store: StoreService) { }

  ngOnInit() {
    this.store.getMonde().then(system => {
      console.log(system);
      this.monde = system;
    });
  }

}

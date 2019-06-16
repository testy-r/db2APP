import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../services/store.service';

@Component({
  selector: 'app-stoff',
  templateUrl: './stoff.component.html',
  styleUrls: ['./stoff.component.scss']
})
export class StoffComponent implements OnInit {
  stoffe = [];
  displayedColumns: string[] = ['Stoff_ID', 'StoffName', 'Farbe', 'Dichte'];


  constructor(private store: StoreService) { }

  ngOnInit() {
    this.store.getStoffe().then(system => {
      console.log(system);
      this.stoffe = system;
    });
  }

}

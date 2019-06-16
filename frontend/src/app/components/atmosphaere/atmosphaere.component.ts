import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../services/store.service';

@Component({
  selector: 'app-atmosphaere',
  templateUrl: './atmosphaere.component.html',
  styleUrls: ['./atmosphaere.component.scss']
})
export class AtmosphaereComponent implements OnInit {
  atmosphaeren = [];
  displayedColumns: string[] = ['Atmosphaere_ID', 'AtName', 'DurchschnittsTemp'];


  constructor(private store: StoreService) { }

  ngOnInit() {
    this.store.getAtmosphaeren().then(system => {
      console.log(system);
      this.atmosphaeren = system;
    });
  }

}

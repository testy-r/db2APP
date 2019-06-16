import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../services/store.service';

@Component({
  selector: 'app-stern',
  templateUrl: './stern.component.html',
  styleUrls: ['./stern.component.scss']
})
export class SternComponent implements OnInit {
  sterne = [];
  displayedColumns: string[] = ['Stern_ID', 'SName', 'Helligkeit', 'bayer', 'leuchtkraft'];


  constructor(private store: StoreService) { }

  ngOnInit() {
    this.store.getSterne().then(system => {
      console.log(system);
      this.sterne = system;
    });
  }

}

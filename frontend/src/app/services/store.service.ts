import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) {}


  getPlanetensysteme(): Promise<any> {
    return this.http.get('http://localhost:9001/Planetensystems').toPromise();
  }

  getPlaneten(): Promise<any> {return this.http.get('http://localhost:9001/Planets').toPromise();}

  getZwergPlaneten(): Promise<any> {return this.http.get('http://localhost:9001/Zwergplanets').toPromise();}

  getMonde(): Promise<any> {return this.http.get('http://localhost:9001/Monds').toPromise();}

  getSterne(): Promise<any> {return this.http.get('http://localhost:9001/Sterns').toPromise();}

  getAtmosphaeren(): Promise<any> {return this.http.get('http://localhost:9001/Atmosphaeres').toPromise();}

  getStoffe(): Promise<any> {return this.http.get('http://localhost:9001/Stoffs').toPromise();}



  updatePlanet(planet: any): Promise<any> {
    return this.http.post('http://localhost:9001/Planet', planet).toPromise();
  }

  deletePlanet(planet: any): Promise<any> {
    return this.http.delete('http://localhost:9001/Planet/'+planet.Planet_ID).toPromise();
  }

  createPlanet(planet: any) {
    return this.http.put('http://localhost:9001/Planet', planet).toPromise();
  }

  getHabitableZone(): Promise<any> {
    return this.http.get('http://localhost:9001/function/fk_HabitableZone').toPromise();
  }



}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule,
  MatTabsModule,
  MatTableModule,
  MatFormFieldModule, MatInputModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanetComponent } from './components/planet/planet.component';
import { PlanetensystemComponent } from './components/planetensystem/planetensystem.component';
import { ZwergplanetComponent } from './components/zwergplanet/zwergplanet.component';
import { MondComponent } from './components/mond/mond.component';
import { SternComponent } from './components/stern/stern.component';
import { AtmosphaereComponent } from './components/atmosphaere/atmosphaere.component';
import { StoffComponent } from './components/stoff/stoff.component';
import { HttpClientModule} from '@angular/common/http';
import {StoreService} from './services/store.service';
import {FormsModule} from "@angular/forms";
import { HabitableZoneComponent } from './components/habitable-zone/habitable-zone.component';


@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent,
    PlanetensystemComponent,
    ZwergplanetComponent,
    MondComponent,
    SternComponent,
    AtmosphaereComponent,
    StoffComponent,
    HabitableZoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }

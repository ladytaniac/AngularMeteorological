import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// import { BuscarLocalizacionComponent } from './modules/location/components/buscar-localizacion/buscar-localizacion.component';
// import { TarjetaLocalizacionComponent } from './modules/location/components/tarjeta-localizacion/tarjeta-localizacion.component';
// import { LocationRoutingModule } from './modules/location/location-routing.module';
import { LocationModule } from './modules/location/location.module';
import { ForecastComponent } from './modules/forecast/forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    // BuscarLocalizacionComponent,
    // TarjetaLocalizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    // LocationRoutingModule,
    LocationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

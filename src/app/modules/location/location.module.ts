import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BuscarLocalizacionComponent } from './components/buscar-localizacion/buscar-localizacion.component';
import { TarjetaLocalizacionComponent } from './components/tarjeta-localizacion/tarjeta-localizacion.component';
import { LocationRoutingModule } from './location-routing.module';

@NgModule({
  declarations: [BuscarLocalizacionComponent, TarjetaLocalizacionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    LocationRoutingModule
  ],
  exports: [
    BuscarLocalizacionComponent, TarjetaLocalizacionComponent
  ]
})
export class LocationModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastComponent } from './modules/forecast/forecast.component';
import { BuscarLocalizacionComponent } from './modules/location/components/buscar-localizacion/buscar-localizacion.component';

const routes: Routes = [
  { path: 'home', component: BuscarLocalizacionComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'forecast/:id', component: ForecastComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

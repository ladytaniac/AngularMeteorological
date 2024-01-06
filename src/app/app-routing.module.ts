import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarLocalizacionComponent } from './modules/location/components/buscar-localizacion/buscar-localizacion.component';

const routes: Routes = [
  { path: '', component: BuscarLocalizacionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

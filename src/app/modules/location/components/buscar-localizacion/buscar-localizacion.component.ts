import { Component } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-buscar-localizacion',
  templateUrl: './buscar-localizacion.component.html',
  styleUrls: ['./buscar-localizacion.component.scss']
})
export class BuscarLocalizacionComponent {
  searchForm = this.fb.group({
    codzip: ['', [Validators.required,Validators.minLength(5), Validators.maxLength(10) ]]
  });
  urlApi: string = environment.apiUrl;
  public titulo: string = "Agregar una localización";
  constructor(private fb:FormBuilder, private http: HttpClient) { }

  public search(): void {
    var ruta = this.urlApi+'?zip='+this.searchForm.value.codzip+',us'+'&appid='+environment.appId;
    this.http.get(ruta).subscribe((res: any)=> {
      console.log('res=', res);
      var rutaCoord = this.urlApi+'?lat='+res.coord.lat+'&lon='+res.coord.lon+'&appid='+environment.appId;
      this.http.get(rutaCoord).subscribe((rescoord:any)=> {
        var idSist = rescoord.id;
        let location = {
          'id': idSist,
          'coord': res.coord,
          'main-w': res.weather[0].main,
          'description-w': res.weather[0].description,
          'icon-w': res.weather[0].icon,
          'temp': res.main.temp,
          'temp_min': res.main.temp_min,
          'temp_max': res.main.temp_max,
        }
        console.log(location);
        // Guardamos en localstorage
        localStorage.setItem('myKeyL', JSON.stringify(location));
        // recuperamos el valor de localstorage
        // data = JSON.parse(localStorage.getItem('myKeyL'));
  
        // Eliminamos localStorage
        // localStorage.removeItem("myKeyL");
      });
    }, (error)=> {
      console.log(error.error.message)
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-buscar-localizacion',
  templateUrl: './buscar-localizacion.component.html',
  styleUrls: ['./buscar-localizacion.component.scss']
})
export class BuscarLocalizacionComponent implements OnInit {
  searchForm = this.fb.group({
    codzip: ['', [Validators.required,Validators.minLength(5), Validators.maxLength(10) ]]
  });
  urlApi: string = environment.apiUrl;
  public titulo: string = "Add location";
  public message: string = '';
  public showmessage: boolean = false;
  public mylocation: object = {};
  public valorZip: string = '';
  constructor(private fb:FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    var siKey= localStorage.getItem('myKeyL');
    console.log('myKeyL inico=', siKey);
    if( siKey ){
      var myzip = JSON.parse(siKey).codzip;
      console.log('myzip=',myzip);
      this.information(myzip);
    } else {
      console.log('nuloooo');
      this.valorZip = '';
    }
  }

  public search(): void {
    /*
    var actualZip = this.searchForm.value.codzip;
    console.log(actualZip) ;
    this.information(String(actualZip));
    console.log('--->', this.mylocation);
    let objStorage= {
      'id': this.mylocation.id,
      'codzip': this.searchForm.value.codzip,
      'name': res.name,
      'state': res.weather[0].main,
      'icon': res.weather[0].icon,
      'temp': res.main.temp,
      'temp_min': res.main.temp_min,
      'temp_max': res.main.temp_max,
    }*/
    
    var ruta = this.urlApi+'?zip='+this.searchForm.value.codzip+',us'+'&appid='+environment.appId;
    this.http.get(ruta).subscribe((res: any)=> {
      var rutaCoord = this.urlApi+'?lat='+res.coord.lat+'&lon='+res.coord.lon+'&appid='+environment.appId;
      this.http.get(rutaCoord).subscribe((rescoord:any)=> {
        var idSist = rescoord.id;
        let location = {
          'id': idSist,
          'codzip': this.searchForm.value.codzip,
          'name': res.name,
          'coord': res.coord,
          'main_w': res.weather[0].main,
          'description_w': res.weather[0].description,
          'icon_w': res.weather[0].icon,
          'temp': res.main.temp,
          'temp_min': res.main.temp_min,
          'temp_max': res.main.temp_max,
        }
        this.mylocation = location;
        let objStorage= {
          'id': idSist,
          'codzip': this.searchForm.value.codzip,
          'name': res.name,
          'state': res.weather[0].main,
          'icon': res.weather[0].icon,
          'temp': res.main.temp,
          'temp_min': res.main.temp_min,
          'temp_max': res.main.temp_max,
        }
        // Guardamos en localstorage
        localStorage.setItem('myKeyL', JSON.stringify(objStorage));
      });
      this.showmessage = false;
      this.message = '';
    }, (error)=> {
      this.mylocation = {};
      this.showmessage = true;
      this.message = 'Lo siento, ciudad no encontrada. El codigo zip no es valido.';
    });
  }

  information(codigoZip:string): void {
    var ruta = this.urlApi+'?zip='+codigoZip+',us'+'&appid='+environment.appId;
    this.http.get(ruta).subscribe((res: any)=> {
      var rutaCoord = this.urlApi+'?lat='+res.coord.lat+'&lon='+res.coord.lon+'&appid='+environment.appId;
      this.http.get(rutaCoord).subscribe((rescoord:any)=> {
        var idSist = rescoord.id;
        let location = {
          'id': idSist,
          'codzip': codigoZip,
          'name': res.name,
          'coord': res.coord,
          'main_w': res.weather[0].main,
          'description_w': res.weather[0].description,
          'icon_w': res.weather[0].icon,
          'temp': res.main.temp,
          'temp_min': res.main.temp_min,
          'temp_max': res.main.temp_max,
        }
        this.mylocation = location;
      });
      this.showmessage = false;
      this.message = '';
    }, (error)=> {
      this.mylocation = {};
      this.showmessage = true;
      this.message = 'Lo siento, ciudad no encontrada. El codigo zip no es valido.';
    });
  }
}

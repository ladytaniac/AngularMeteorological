import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  id: number = 0;
  titulo: string = '';
  objStorage: string = '';
  datoArray: any[] = [];
  arrayLst: any[] = [];
  constructor(private route: ActivatedRoute, private routerSend:Router) {
    var siKey= localStorage.getItem('myKeyL');
    console.log('myKeyL=', siKey);
    // var data = JSON.parse(localStorage.getItem('myKeyL'));
    if( siKey ){
      this.objStorage = JSON.parse(siKey);
      this.titulo = JSON.parse(siKey).name;
      console.log(JSON.parse(siKey))
      console.log(JSON.parse(siKey).name)
      var day = new Date().getDay();
      let objStorage= {
        'dia': this.getDia(day),
        'estado': JSON.parse(siKey).state,
        'high': JSON.parse(siKey).temp_max,
        'low': JSON.parse(siKey).temp_min,
        'icon': "http://openweathermap.org/img/w/" + JSON.parse(siKey).icon + ".png"
      }
      this.datoArray.push(objStorage);      
    } else {
      this.objStorage = '';
    }
  }

  ngOnInit(): void {
    this.objetoPrueba();
    console.log('entre a otra pagina');
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('id=', this.id);
      if(this.objStorage != '') {
        this.titulo = this.titulo+' ('+this.id+')';
      } else {
        this.titulo = '';
      }
    });
  }
  getDia(index: number): void{
    var dia = new Array(7);
    dia[0] = "Domingo";
    dia[1] = "Lunes";
    dia[2] = "Martes";
    dia[3] = "Miércoles";
    dia[4] = "Jueves";
    dia[5] = "Viernes";
    dia[6] = "Sábado";
    return dia[index];
  }

  objetoPrueba(): void{
    /* Objeto prueba solo porque no me funciono el servicio */
    let obj= {
      'estado': 'Sunny',
      'high': 78,
      'low': 70,
      'icon': '01d'
    }
    let obj1= {
      'estado': 'Clouds',
      'high': 282.3,
      'low': 285.05,
      'icon': '04n'
    }
    let obj2= {
      'estado': 'Sunny',
      'high': 202.3,
      'low': 208.5,
      'icon': '02n'
    }
    let obj3= {
      'estado': 'Clouds',
      'high': 100,
      'low': 150,
      'icon': '09n'
    }
    let obj4= {
      'estado': 'Sunny',
      'high': 202.3,
      'low': 205,
      'icon': '03n'
    }
    let obj5= {
      'estado': 'Clouds',
      'high': 282.66,
      'low': 285.15,
      'icon': '04n'
    }
    let obj6= {
      'estado': 'Sunny',
      'high': 60,
      'low': 62,
      'icon': '13n'
    }
    this.arrayLst.push(obj);
    this.arrayLst.push(obj1);
    this.arrayLst.push(obj2);
    this.arrayLst.push(obj3);
    this.arrayLst.push(obj4);
    this.arrayLst.push(obj5);
    this.arrayLst.push(obj6);
    var day = new Date().getDay();
    if(this.datoArray.length <= 4) {
      var nexday = day+1;
      console.log('nexday=', nexday);
      if(day == 6) {
        var cont = 0;
        var i = 0;
        while (i < 6 && this.datoArray.length <= 4) {
          const r= Math.floor(Math.random() * (this.arrayLst.length - 1)) + 0;
          var miseleccion = this.arrayLst[r];
          let objStoragei= {
            'dia': this.getDia(i),
            'estado': miseleccion.estado,
            'high': miseleccion.high,
            'low': miseleccion.low,
            'icon': "http://openweathermap.org/img/w/" + miseleccion.icon + ".png"
          }
          this.datoArray.push(objStoragei);
          i += 1;
        };
      } else {
        var c = day+1;
        while (c < 6 && this.datoArray.length <= 4) {
          const rc= Math.floor(Math.random() * (this.arrayLst.length - 1)) + 0;
          var miseleccionc = this.arrayLst[rc];
          let objStoragec= {
            'dia': this.getDia(c),
            'estado': miseleccionc.estado,
            'high': miseleccionc.high,
            'low': miseleccionc.low,
            'icon': "http://openweathermap.org/img/w/" + miseleccionc.icon + ".png"
          }
          this.datoArray.push(objStoragec);
          c += 1;
        };
      }
    }
  }
  goInicio(): void {
    // this.routerSend.navigate(['/forecast', this.localizacion.codzip]);
    // Eliminamos localStorage
    localStorage.removeItem("myKeyL");
    this.routerSend.navigate(['/']);
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-localizacion',
  templateUrl: './tarjeta-localizacion.component.html',
  styleUrls: ['./tarjeta-localizacion.component.scss']
})
export class TarjetaLocalizacionComponent implements OnInit{
  @Input() localizacion:any = {};
  @Output() childEmiter = new EventEmitter<string>();
  titulo: string = '';
  iconUrl: string = '';
  constructor(private router:Router) {
  }
  ngOnInit(): void {
    console.log('Actual=', this.localizacion);
    this.titulo = this.localizacion.main_w;
    var iconurl = "http://openweathermap.org/img/w/" + this.localizacion.icon_w + ".png";
    this.iconUrl = iconurl;
    // this.childEmiter.emit('Lady Tania');
  }
  moreInformation(): void {
    this.router.navigate(['/forecast', this.localizacion.codzip]);
  }
}

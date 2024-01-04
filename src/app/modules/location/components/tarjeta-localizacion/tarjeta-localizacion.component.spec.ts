import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaLocalizacionComponent } from './tarjeta-localizacion.component';

describe('TarjetaLocalizacionComponent', () => {
  let component: TarjetaLocalizacionComponent;
  let fixture: ComponentFixture<TarjetaLocalizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaLocalizacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaLocalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

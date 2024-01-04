import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarLocalizacionComponent } from './buscar-localizacion.component';

describe('BuscarLocalizacionComponent', () => {
  let component: BuscarLocalizacionComponent;
  let fixture: ComponentFixture<BuscarLocalizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarLocalizacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarLocalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { listarTarjetaCreditoComponent } from './listarTarjeta-credito.component';

describe('ListarTarjetaCreditoComponent', () => {
  let component: listarTarjetaCreditoComponent;
  let fixture: ComponentFixture<listarTarjetaCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [listarTarjetaCreditoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(listarTarjetaCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

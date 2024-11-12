import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { TarjetaCreditoComponent } from './components/tarjeta-credito/tarjeta-credito.component';
import { listarTarjetaCreditoComponent } from './components/listarTarjeta-credito/listarTarjeta-credito.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,TarjetaCreditoComponent,listarTarjetaCreditoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tarjetasCredito';
}

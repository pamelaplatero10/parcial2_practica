import { Component } from '@angular/core';
import { Registros } from '../../registros';

@Component({
  selector: 'app-reportes',
  imports: [],
  templateUrl: './reportes.html',
  styleUrl: './reportes.css'
})
export class Reportes {
  registros: string[] = [];

  constructor(private registrosService: Registros) {
    this.registros = this.registrosService.consultarRegistros();
  }
}


import { Component } from '@angular/core';
import { ItemList } from '../item-list/item-list';
import { ItemDetail } from '../item-detail/item-detail';
import { Registros } from '../../registros';

@Component({
  selector: 'app-dashboard',
  imports: [ItemList, ItemDetail],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  elementos: string[] = ['Inicio', 'Procesos', 'Reportes'];
  elementoSeleccionado: string = '';
  registros: string[] = [];

  constructor(private registrosService: Registros) {
    this.registros = this.registrosService.consultarRegistros();
  }

  seleccionarElemento(item: string) {
    this.elementoSeleccionado = item;
  }

  agregarRegistro() {
    this.registrosService.agregarRegistro('Registro nuevo');
    this.registros = this.registrosService.consultarRegistros();
  }

  modificarRegistro() {
    this.registrosService.modificarRegistro(0, 'Registro modificado');
    this.registros = this.registrosService.consultarRegistros();
  }
}

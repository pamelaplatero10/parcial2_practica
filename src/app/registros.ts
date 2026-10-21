import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Registros {
  registros: string[] = ['Registro 1', 'Registro 2', 'Registro 3'];

  consultarRegistros() {
    return this.registros;
  }

  agregarRegistro(registro: string) {
    this.registros.push(registro);
  }

  modificarRegistro(indice: number, registro: string) {
    this.registros[indice] = registro;
  }
}

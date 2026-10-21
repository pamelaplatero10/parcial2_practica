import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-proceso',
  imports: [],
  templateUrl: './detalle-proceso.html',
  styleUrl: './detalle-proceso.css'
})
export class DetalleProceso {
  proceso: string = '';

  constructor(private route: ActivatedRoute) {
    this.proceso = this.route.snapshot.params['proceso'];
  }
}

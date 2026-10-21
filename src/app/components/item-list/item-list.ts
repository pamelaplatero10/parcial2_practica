import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-list',
  imports: [],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css'
})
export class ItemList {
  @Input() items: string[] = [];
  @Output() seleccionar = new EventEmitter<string>();

  seleccionarItem(item: string) {
    this.seleccionar.emit(item);
  }
}

import { Component, Output, EventEmitter } from '@angular/core';
import { Receta } from '../receta';

@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.css']
})
export class ListaRecetasComponent  {
  recetas: Array<Receta> = [];
  @Output() recetaSeleccionada = new EventEmitter<Receta>();

  receta: Receta = new Receta ('FLAN DE HUEVO','Es tradicionalmente cocinado en baño María con caramelo en la capa inferior (superior al servirlo). Una vez terminada la cocción el molde es invertido, quedando cubierto el flan con el caramelo. También puede ser preparado con flan instantáneo industrial, el cual lleva una preparación similar a la de la gelatina.', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSWp6wemxKmdn15hYjsXXlohuLoh3LWVOT0pTfJTcwAVA7TLY54Ow', []);

  constructor() { }

seleccionarReceta(){
  this.recetaSeleccionada.emit(this.receta);
}
}

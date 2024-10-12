// src/app/models/indicador.model.ts

export class Indicador {
    id_medicion: number;
    indicador: string;
    fecha: Date;
    valor: number;
    colorcódigo: string;
  
    constructor(
      id_medicion: number,
      indicador: string,
      fecha: Date,
      valor: number,
      colorcódigo: string
    ) {
      this.id_medicion = id_medicion;
      this.indicador = indicador;
      this.fecha = fecha;
      this.valor = valor;
      this.colorcódigo = colorcódigo;
    }
  }
  
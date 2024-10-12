import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IPokemonList, IPokemonResponse } from './core/models/api.interface';
import { Observable } from 'rxjs';
import { DataService } from './core/services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { Indicador } from './core/models/indicador.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    TableModule,
    AccordionModule,
    InputTextModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'indicadores_Client';
  cols: any[] = [];
  indicadores: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.cols = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'valor_esperado', header: 'Valor Esperado' },
      { field: 'valor_minimo', header: 'Valor Mínimo' },
      { field: 'valor_maximo', header: 'Valor Máximo' }
    ];

    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe(
      result => {
        console.log('Data:', result);
        this.indicadores = result.map(item => ({
          id_indicador: item.id_indicador,
          nombre: item.nombre,
          valor_esperado: item.valor_esperado,
          valor_minimo: item.valor_minimo,
          valor_maximo: item.valor_maximo
        }));
      },
      error => console.error('Error:', error)
    );
  }

  postData() {
    const data = { name: 'John Doe' };
    this.dataService.postData(data).subscribe(
      result => console.log('Posted Data:', result),
      error => console.error('Error:', error)
    );
  }

  putData() {
    const id = '123';
    const data = { name: 'Jane Doe' };
    this.dataService.putData(id, data).subscribe(
      result => console.log('Updated Data:', result),
      error => console.error('Error:', error)
    );
  }

  deleteData() {
    const id = '123';
    this.dataService.deleteData(id).subscribe(
      result => console.log('Deleted Data:', result),
      error => console.error('Error:', error)
    );
  }
}

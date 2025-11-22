import { Component,OnInit } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DistanciaLogica } from './distancia-logia';

@Component({
  selector: 'app-distancia',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent implements OnInit {
    formulario!: FormGroup;
    objDistancia: DistanciaLogica = new DistanciaLogica();
    nx1!: number;
    nx2!: number;
    ny1!: number;
    ny2!: number;
    // Resultado final
    resFinal!: number;

    ngOnInit(): void {
      this.formulario = new FormGroup({
        nx1: new FormControl(''),
        nx2: new FormControl(''),
        ny1: new FormControl(''),
        ny2: new FormControl(''),
      });
    }

  calcular(): void {
    this.objDistancia.nx1_log = this.formulario.value.nx1;
    this.objDistancia.nx2_log = this.formulario.value.nx2;
    this.objDistancia.ny1_log = this.formulario.value.ny1;
    this.objDistancia.ny2_log = this.formulario.value.ny2;
    this.objDistancia.calcularDistancia();
    this.resFinal = this.objDistancia.resFinal_log;
  }

  borrar(): void {
    this.formulario.reset();
    this.objDistancia.borrar();
    this.resFinal = this.objDistancia.resFinal_log;
  }
}
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Multiplicar_log } from './axb-logica'; 

@Component({
  selector: 'app-axb',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './axb.component.html',
  styleUrl: './axb.component.css'
})
export class AxbComponent implements OnInit {
  formulario!: FormGroup;
  resultado!: number;
  valorA: number = 0;
  valorB: number = 0;
  objMult: Multiplicar_log = new Multiplicar_log();

  ngOnInit(): void {
    this.formulario = new FormGroup({
      valorA: new FormControl(''),
      valorB: new FormControl(''),
    });
  }
  multValores(): void {
    this.objMult.valorA_log = this.formulario.value.valorA;
    this.objMult.valorB_log = this.formulario.value.valorB;
    
    this.objMult.multiplicarConSumas();
    
    this.resultado = this.objMult.resultado_log;
  }
  borrar():void{
    this.formulario.reset();
    this.objMult.borrar();
    this.resultado = this.objMult.resultado_log;
  }
}

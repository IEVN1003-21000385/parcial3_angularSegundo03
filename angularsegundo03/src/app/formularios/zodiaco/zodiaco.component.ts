import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Zodiaco_log } from './zodiaco-logica';

@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})
export class ZodiacoComponent implements OnInit {
  formulario!: FormGroup;
  objZoo: Zodiaco_log = new Zodiaco_log();
  resnombre: string = "";
  resEdad: string = "";
// dsds:;new imprimir();
  sex: boolean = true;

  resSimbolo: string = "";
  imgz: string = "";

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      aPaterno: new FormControl(''),
      aMaterno: new FormControl(''),
      dia: new FormControl(''),
      mes: new FormControl(''),
      ano: new FormControl(''),
      valorA: new FormControl(''),
      valorB: new FormControl(''),
    });
  }
//-----------------------------------------------
  imprimir(): void {
    // Nombre
    this.objZoo.nombre_log = this.formulario.value.nombre;
    this.objZoo.aPaterno_log = this.formulario.value.aPaterno;
    this.objZoo.aMaterno_log = this.formulario.value.aMaterno;
    this.objZoo.calcularNombreCompleto();
    this.resnombre = this.objZoo.resnombre_log;

    // Edad
    this.objZoo.dia_log = this.formulario.value.dia;
    this.objZoo.mes_log = this.formulario.value.mes;
    this.objZoo.ano_log = this.formulario.value.ano;
    this.objZoo.calcularEdad();
    this.resEdad = this.objZoo.resEdad_log;

    // Signo zodiacal
    this.objZoo.ano_log = this.formulario.value.ano;
    this.objZoo.calcularSignoZodiacalChino();
    this.resSimbolo = this.objZoo.resSimbolo_log;
    this.imgz = this.objZoo.imgz_log;
  }

  borrar(): void {
    this.resnombre = "";
    this.resEdad = "";
    this.resSimbolo = "";
    this.imgz = "";
  }
}


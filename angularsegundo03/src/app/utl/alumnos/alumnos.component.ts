import { AlumnosUTL } from './../alumnos';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlumnosFilterPipe } from '../alumnos-filter.pipe';
import { CommonModule } from '@angular/common';
import { ProyectoapiService } from '../proyectoapi.service';

@Component({
  selector: 'app-alumnos',
  imports: [FormsModule, CommonModule, RouterLink, AlumnosFilterPipe],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent {
  imgWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  alumnoTitle!:string;
  listFilter:string ='';
  dataSource:any=[];

  constructor(public AlumnosUtl:ProyectoapiService){}

  alumnosIric:AlumnosUTL[]=
  [
    {
      matricula:21000411,
      nombre:"Juan",
      apaterno:"Pérez",
      amaterno:"López",
      correo:""
    },
    {
      matricula:21000412,
      nombre:"María",
      apaterno:"González",
      amaterno:"Rodríguez",
      correo:""
    },
    {
      matricula:21000413,
      nombre:"Luis",
      apaterno:"Hernández",
      amaterno:"Martínez",
      correo:""
    }
  ]
  ngOnInit():void{
    this.AlumnosUtl.getAlumnos().subscribe({
            next:response => {
        this.dataSource=response;
      },
      error: error=>console.log(error)
    }
      );
  }



}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlumnosUTL } from './alumnos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoapiService {
  constructor(private  http: HttpClient) { }


public getAlumnos():Observable<AlumnosUTL[]>{
  return this.http.get<AlumnosUTL[]>('http://127.0.0.1:5000/alumnos')
}

agregarNuevoAlumno(datos:AlumnosUTL){
  return this.http.post('http://127.0.0.1:5000/alumnos',datos)
}

public getAlumno(mat:number):Observable<AlumnosUTL>{
  console.log(mat)
  return this.http.get<AlumnosUTL>('http://127.0.0.1:5000/alumnos/'+mat)
}

modificarAlumno(mat:number,datos:AlumnosUTL){
  return this.http.put('http://127.0.0.1:5000/alumnos/'+mat,datos)
}
public EliminaAlumno(mat:number):Observable<AlumnosUTL>{
  return this.http.delete<AlumnosUTL>('http://127.0.0.1:5000/alumnos/'+mat)
}

}

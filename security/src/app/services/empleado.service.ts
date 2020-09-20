import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './../models/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private URL = 'http://localhost:3000/';
  constructor(private httpClient : HttpClient) { }

  getEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(this.URL + 'empleados');
  }


}

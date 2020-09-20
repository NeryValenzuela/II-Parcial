import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Detalle } from './../models/detalle';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {


  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getFacturas(id): Observable<Detalle[]>{
    return this.http.get<Detalle[]>(this.url + '/facturas/' + id + '/productos')
  }

}

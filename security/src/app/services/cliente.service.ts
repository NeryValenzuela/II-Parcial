import { Cliente } from './../models/cliente';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private URL = 'http://localhost:3000/';
  constructor(private httpClient : HttpClient) { }


  getCliente(){
    return this.httpClient.get<Cliente[]>(this.URL + 'clientes');
  }

}

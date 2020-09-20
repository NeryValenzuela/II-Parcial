import { Router } from '@angular/router';
import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private clientesService: ClienteService,
    private routes: Router
    ) { }
  clientes: Cliente[];

  ngOnInit(): void {
    localStorage.removeItem('cliente');
    this.clientesService.getCliente().subscribe(
    res => {
      this.clientes = res;
    }
    )
  }
  Oncapturar(item: Cliente): void {
    localStorage.setItem('cliente', JSON.stringify(item));
    this.routes.navigate(['clientes/factura'])
  }

}

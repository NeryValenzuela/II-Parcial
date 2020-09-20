import { Factura } from './../../models/factura';
import { Cliente } from 'src/app/models/cliente';
import { FacturaService } from './../../services/factura.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {
  facturas: Factura[];
  constructor(private serviceFactura: FacturaService, private routes: Router) { }
  cliente: Cliente;

  ngOnInit(): void {
    this.cliente = JSON.parse(localStorage.getItem('cliente'));
    this.serviceFactura.getFacturas(this.cliente.id).subscribe(
      (res) =>{
        this.facturas= res;
      }
    )
  }
  Oncapturar(item: Factura): void {
    console.log(item)
    localStorage.setItem('factura', JSON.stringify(item));
    this.routes.navigate(['clientes/factura/detalle'])
  }
}

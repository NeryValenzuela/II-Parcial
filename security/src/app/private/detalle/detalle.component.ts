import { Detalle } from './../../models/detalle';
import { Factura } from './../../models/factura';
import { Cliente } from 'src/app/models/cliente';
import { DetalleService } from './../../services/detalle.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  factura: Factura;
  cliente: Cliente;
  detalle: Detalle[];
  constructor(private detalleService: DetalleService) { }


  ngOnInit(): void {
    this.cliente = JSON.parse(localStorage.getItem('cliente'));
    this.factura = JSON.parse(localStorage.getItem('factura'));
    console.log(this.factura)
    this.detalleService.getFacturas(this.factura.id).subscribe(
      (res) =>{
        this.detalle = res;
      }
    )
  }
}

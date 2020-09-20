import { Empleado } from './../../models/empleados';
import { EmpleadoService } from './../../services/empleado.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor(private empleadoService: EmpleadoService) { }

  empleado: Empleado[];

  ngOnInit(): void {
    this.empleadoService.getEmpleados().subscribe(
      res => {
        this.empleado = res;
      }
    );
  }
}

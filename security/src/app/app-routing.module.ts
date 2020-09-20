import { DetalleComponent } from './private/detalle/detalle.component';
import { FacturasComponent } from './private/facturas/facturas.component';
import { AuthGuard } from './auth.guard';
import { EmpleadosComponent } from './private/empleados/empleados.component';
import { ClientesComponent } from './private/clientes/clientes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './public/login/login.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'clientes', component: ClientesComponent, canActivate:[AuthGuard]},
  {path: 'empleados', component: EmpleadosComponent, canActivate:[AuthGuard]},
  {path: 'clientes/factura', component: FacturasComponent, canActivate:[AuthGuard]},
  {path: 'clientes/factura/detalle', component: DetalleComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

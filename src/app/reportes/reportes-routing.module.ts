import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReporteClientesComponent } from './reporte-clientes/reporte-clientes.component';
import { ReporteEmpleadosComponent } from './reporte-empleados/reporte-empleados.component';
import { ReporteProveedoresComponent } from './reporte-proveedores/reporte-proveedores.component';

const routes: Routes = [
  {path: '', component: ReporteClientesComponent},
  {path: 'ReportesEmpleados', component: ReporteEmpleadosComponent},
  {path: 'ReporteProveedores', component: ReporteProveedoresComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }

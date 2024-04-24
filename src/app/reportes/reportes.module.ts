import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { ReporteClientesComponent } from './reporte-clientes/reporte-clientes.component';
import { ReporteEmpleadosComponent } from './reporte-empleados/reporte-empleados.component';
import { ReporteProveedoresComponent } from './reporte-proveedores/reporte-proveedores.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ReporteClientesComponent,
    ReporteEmpleadosComponent,
    ReporteProveedoresComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    SharedModule
  ]
})
export class ReportesModule { }

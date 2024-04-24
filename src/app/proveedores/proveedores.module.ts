import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { ListarProveedorComponent } from './listar-proveedor/listar-proveedor.component';
import { EditarProveedorComponent } from './editar-proveedor/editar-proveedor.component';
import { AgregarProveedorComponent } from './agregar-proveedor/agregar-proveedor.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListarProveedorComponent,
    EditarProveedorComponent,
    AgregarProveedorComponent
  ],
  imports: [
    CommonModule,
    ProveedoresRoutingModule,
    SharedModule
  ]
})
export class ProveedoresModule { }

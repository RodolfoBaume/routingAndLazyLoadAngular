import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProveedorComponent } from './agregar-proveedor/agregar-proveedor.component';
import { EditarProveedorComponent } from './editar-proveedor/editar-proveedor.component';
import { ListarProveedorComponent } from './listar-proveedor/listar-proveedor.component';

const routes: Routes = [
  {path: 'Agregarproveedor', component: AgregarProveedorComponent},
  {path: 'EditarProveedor', component: EditarProveedorComponent},
  {path: '', component: ListarProveedorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedoresRoutingModule { }

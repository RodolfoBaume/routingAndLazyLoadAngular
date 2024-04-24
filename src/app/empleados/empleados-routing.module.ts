import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './listar-empleado/listar-empleado.component';

const routes: Routes = [
  {path: 'AgregarEmpleado', component: AgregarEmpleadoComponent},
  {path: 'EditarEmpleado', component: EditarEmpleadoComponent},
  {path: '', component: ListarEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }

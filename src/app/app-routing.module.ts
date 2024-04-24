import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren:()=> import('./welcome/welcome.module').then(m => m.WelcomeModule)},
  {path: 'clientes', loadChildren:()=> import('./clientes/clientes.module').then(m => m.ClientesModule)},
  {path: 'empleados', loadChildren:()=> import('./empleados/empleados.module').then(m => m.EmpleadosModule)},
  {path: 'proveedores', loadChildren:() => import('./proveedores/proveedores.module').then(m => m.ProveedoresModule)},
  {path: 'reportes', loadChildren:() => import('./reportes/reportes.module').then(m => m.ReportesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

import { ProductosComponent } from './productos/productos.component';


import { ContactoComponent } from './contacto/contacto.component';
import { SesionComponent } from './sesion/sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { PieComponent } from './pie/pie.component'; 
import { Error404Component } from './error404/error404.component'; 



const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'registro', component: RegistroComponent},
  { path: 'sesion', component: SesionComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },

  {path: 'error404', component: Error404Component},

  {path: '**', redirectTo:'/error404'},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// lazy loading  carga perezosa  sir ve para que cuando nuestra aplicacion cresca no tarde mucho tiempo en cargar
const routes: Routes = [
  //cuando el usuario este en el loggin solo carga ese modulo
  {
    path:'',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

/* TODO fazer um esquema de rotas descente*/
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '**', redirectTo: 'home'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

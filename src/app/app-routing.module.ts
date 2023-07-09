import { MachineDetailsComponent } from './machine-details/machine-details/machine-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';

/* TODO fazer um esquema de rotas descente*/
const routes: Routes = [
  { path: 'home', component: HomeComponent },

  {
    path: 'machine', component: MachineDetailsComponent
  },
  {
    path: 'cadastro', component: CadastroComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '**', redirectTo: 'home'
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

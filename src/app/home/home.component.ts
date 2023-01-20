import { MatSidenav } from '@angular/material/sidenav';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  /*TODO bolar uma forma de pegar o estado do sidebar para alterar de um botao por aqui*/ 
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  
  showFiller = true;
  ngOnInit() {
    console.log(this.sidenav);

    
  }

  links = [
    {name: 'deshboard', link: '/tesate'},
    {name: 'deshboard', link: '/tesate'},
    {name: 'deshboard', link: '/tesate'}
  ]

  cards = [
    {title: 'maquina 1', text: 'sfjasldkffksdajf klskladfjaklsdfksfdjkl aklsdjf klasjfdkldasjfklsdjf'},
    {title: 'maquina 1', text: 'sfjasldkffksdajf klskladfjaklsdfksfdjkl aklsdjf klasjfdkldasjfklsdjf'},
    {title: 'maquina 1', text: 'sfjasldkffksdajf klskladfjaklsdfksfdjkl aklsdjf klasjfdkldasjfklsdjf'},
    {title: 'maquina 1', text: 'sfjasldkffksdajf klskladfjaklsdfksfdjkl aklsdjf klasjfdkldasjfklsdjf'},
    {title: 'maquina 1', text: 'sfjasldkffksdajf klskladfjaklsdfksfdjkl aklsdjf klasjfdkldasjfklsdjf'},
  ]
}

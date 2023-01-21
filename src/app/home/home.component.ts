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
    {title: 'Embaladoras', text: 'sfjasldkffksdajf klskladfjaklsdfksfdjkl aklsdjf klasjfdkldasjfklsdjf', img: '../../assets/images/image5.png'},
    {title: 'Prensas', text: 'sfjasldkffksdajf klskladfjaklsdfksfdjkl aklsdjf klasjfdkldasjfklsdjf',img: '../../assets/images/image6.png'},
    {title: 'Cortes', text: 'sfjasldkffksdajf klskladfjaklsdfksfdjkl aklsdjf klasjfdkldasjfklsdjf', img: '../../assets/images/image7.png'},
    {title: 'Conformação', text: 'sfjasldkffksdajf klskladfjaklsdfksfdjkl aklsdjf klasjfdkldasjfklsdjf', img: '../../assets/images/image4.png'},
    {title: 'Tinturaria', text: 'sfjasldkffksdajf klskladfjaklsdfksfdjkl aklsdjf klasjfdkldasjfklsdjf', img: '../../assets/images/image9.png'},
  ]
}

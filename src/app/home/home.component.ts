import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  showFiller = true;
  ngOnInit() {
    console.log('foii');
    
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

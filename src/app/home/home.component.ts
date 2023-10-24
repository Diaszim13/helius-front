import { MachineServiceService } from './../services/machine-service.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Component, ViewChild } from '@angular/core';
import { machine } from '../interfaces/machine';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  /*TODO bolar uma forma de pegar o estado do sidebar para alterar de um botao por aqui*/ 
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  machines: machine[] = [];
  inativeMachines: machine[] = [];
  img = '../../assets/images/image5.png';
  showFiller = true;
  ngOnInit() {
    this.getMachinesList();
    this.getInativeMachines(); 
    console.log(this.inativeMachines);
  }

  constructor(private service: MachineServiceService) {}
  async getMachinesList() {
    (await this.service.getMachines()).subscribe(res => {
      console.table(res.machines);
      this.machines = res.machines;
    });      
  }

  async getInativeMachines() {
    (await this.service.getInativeMachines()).subscribe(res => {
      console.log('res: ' + res.machines);
      
      this.inativeMachines = res.machines;
    })
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

 import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component2.component.html',
  styleUrl: './component2.component.css'
})
export class Component2Component {
    //Exibir texto
    exibirTexto:boolean = false;
    //função para exibir ou ocultar o texto
    //o ! inverte a resposta do boolean
    visibilidadeTexto():void{
      this.exibirTexto = !this.exibirTexto;
    }

  }

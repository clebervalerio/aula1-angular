 import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component2',
  standalone: true,
  imports: [CommonModule, FormsModule],
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


    //lista de nomes "laço de repetição"
    nomes:string[]=['Larissa','ricardo','Cleber','Viviane'];
    
    
    //linguagem de programação
      linguagem:string = '';
      // linguagem:string = 'c#';
    

    // //função para alterar a linguagem
    // alterarLinguagem():void{
    //   alert('Funcionou');

    // }


  }

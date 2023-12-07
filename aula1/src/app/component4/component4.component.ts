import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component4',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './component4.component.html',
  styleUrl: './component4.component.css'
})
export class Component4Component {

  // Variável para armazenar um texto
  texto:string = '';

  // Variáveis para armazenar os inputs do formulário
  email:string='';
  senha:string='';
}
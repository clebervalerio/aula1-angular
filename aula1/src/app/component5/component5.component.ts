import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-component5',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './component5.component.html',
  styleUrl: './component5.component.css'
})
export class Component5Component {

  // Objeto de formulário
  formulario = new FormGroup({
    email : new FormControl(''),
    senha: new FormControl('')
  });

  // Função de envio
  enviar():void{
    alert('Formulário enviado!');
  }

}
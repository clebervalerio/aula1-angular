import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component {
        //variável
        texto:string = 'Hello World!';  // uso de apostofros em vez de aspas ' padronizaçãoem ts'
        
        //Objeto
        //suponha que vc tem um obejtoe  quer exibir ele, quando nao definido coloca any
        // obejto com caracteristicas noe da pessoa e idade
        pessoa:any = {
          'nome':'Julio',
          'idade':36
        }
      }

import { Component } from '@angular/core';

@Component({
  selector: 'app-component3',
  standalone: true,
  imports: [],
  templateUrl: './component3.component.html',
  styleUrl: './component3.component.css'
})
export class Component3Component {
  //Váriavel de media
  media:number = 8;

  //váriavel de linguagem
  linguagem:string ='CSS'

}

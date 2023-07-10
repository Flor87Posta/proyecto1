import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uncomponente',
  templateUrl: './uncomponente.component.html',
  styleUrls: ['./uncomponente.component.scss']
})
export class UncomponenteComponent implements OnInit{
  

  //defino variable aleatoria:
  aleatorio: number = Math.floor(Math.random()*100);

  constructor (){} //se ejevcuta al inicial la aplicacion

  ngOnInit(): void { //se ejecuta cuando esta en uso el componente
      
  }

}

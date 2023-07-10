import { Component } from '@angular/core';
import {Libro} from "./common/types"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto1';

  // miVar= 0;
  // miArray= [];
  // miLibro: Libro;
  // misLibros: Libro[]

  constructor(){
    // this.miLibro= {
    //   id:1,
    //   titulo: ""
    // }
    // this.misLibros=[{
    //   id:1,
    //   titulo: ""
    // }]
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes:string[] = ['Spiderman', 'Ironman','Hulk','Thor'];
  heroesBorrados: string[] = [];
  eliminado:string='';
  borrarHeroe(){
    let elheroe = this.heroes[0].toString();
    this.heroes.shift();
    this.heroesBorrados.push(elheroe);
  }
}

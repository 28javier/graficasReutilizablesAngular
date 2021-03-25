import { Component, OnInit } from '@angular/core';



interface MenuItem {
  ruta: string,
  nombre: string
}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    }
    `
  ]
})
export class MenuComponent  {

  menu: MenuItem[] = [

    {ruta: '/graficas/barras', nombre: 'Grafica Barras'},
    {ruta: '/graficas/barras-dobles', nombre: 'Barras Dobles'},
    {ruta: '/graficas/dona', nombre: 'Grafica Dona'},
    {ruta: '/graficas/dona-http', nombre: 'Grafica Dona Http'},
  ]; 


}

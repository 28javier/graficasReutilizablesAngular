import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-barras-dobles',
  templateUrl: './barras-dobles.component.html',
  styles: [
  ]
})
export class BarrasDoblesComponent  {

  proveedoresData: ChartDataSets[] = [
    { data: [ 100,200,300,400,500 ], label: 'Vendedor A', backgroundColor:'#7FDB35' },
    { data: [ 50,250,30, 450,200 ], label: 'Vendedor B', backgroundColor:'#DB582E' },
  ];
  
  proveedoresLabels: string[] = ['2021', '2022','2023','2024','2025'];
  
  productoData: ChartDataSets[] = [
    { data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: 'blue' },
  ];


  // public actualizar(): void {
  //   // Only Change 3 values
  //   this.proveedoresData[0].data = [
  //     Math.round(Math.random() * 100),
  //     Math.round(Math.random() * 100),
  //     Math.round(Math.random() * 100),
  //     Math.round(Math.random() * 100),
  //     Math.round(Math.random() * 100),
  //   ];
  //   this.proveedoresData[1].data = [
  //     Math.round(Math.random() * 100),
  //     Math.round(Math.random() * 100),
  //     Math.round(Math.random() * 100),
  //     Math.round(Math.random() * 100),
  //     Math.round(Math.random() * 100),   
  //   ]; 
  // }

  // public actualizar1(){
  //   this.productoData[0].data = [
  //     Math.round(Math.random() * 100),
  //     Math.round(Math.random() * 100),
  //     Math.round(Math.random() * 100),
  //     Math.round(Math.random() * 100),
  //     Math.round(Math.random() * 100),
  //   ];
  // }
}

import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Colors, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

 // Doughnut
 public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Ejemplo Ojo'];
 public doughnutChartData: MultiDataSet = [
   [350, 450, 100, 400],
  //  [50, 150, 120],
  //  [250, 130, 70],
 ];
 public doughnutChartType: ChartType = 'doughnut';
 public colors: Colors[] = [
   {
     backgroundColor: [
       '#6FE843','#F5973B', '#FFE53D', '#3DFFCE', '#81A8F7'
     ]
   }
 ]

 constructor() { }

 ngOnInit(): void {
 }

 // events
 public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
   console.log(event, active);
 }

 public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
   console.log(event, active);
 }
}

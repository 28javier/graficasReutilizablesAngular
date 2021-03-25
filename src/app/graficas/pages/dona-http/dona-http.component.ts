import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Colors, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {
// Doughnut
public doughnutChartLabels: Label[] = [
  // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Ejemplo Ojo'
];
public doughnutChartData: MultiDataSet = [
  // [350, 450, 100, 400],
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
];

  constructor(private  graficasService: GraficasService) { }

  ngOnInit(): void {
    // codigo 1
    // this.graficasService.getUsuarioRedesSociales()
    //   .subscribe(data => {
    //     console.log(data);
    //     const labels = Object.keys(data);
    //     const valor = Object.values(data);
    //     // console.log(labels);
    //     // console.log(valor);
    //     this.doughnutChartLabels = labels;
    //     this.doughnutChartData.push(valor);
    //   });

    // codigo 2
    this.graficasService.getUsuariosRedesSociles1()
    .subscribe( ({labels, valor}) => {
      // console.log(labels);
      // console.log(valor);
      this.doughnutChartLabels = labels;
      this.doughnutChartData.push(valor);
    });
  }

  

 // events
//  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
//    console.log(event, active);
//  }

//  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
//    console.log(event, active);
//  }

}

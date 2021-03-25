import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { GraficasRoutingModule } from './graficas-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDoblesComponent } from './pages/barras-dobles/barras-dobles.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { GraficasBarrasComponent } from './components/graficas-barras/graficas-barras.component';


@NgModule({
  declarations: [
    BarrasComponent, 
    BarrasDoblesComponent, 
    DonaComponent,
     DonaHttpComponent,
     GraficasBarrasComponent,
     
    ],
  imports: [
    CommonModule,
    ChartsModule,
    GraficasRoutingModule
  ]
})
export class GraficasModule { }

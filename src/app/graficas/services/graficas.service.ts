import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) {
//prass
   }

   getUsuarioRedesSociales() {
    return this.http.get('http://localhost:3000/grafica');
   }

   getUsuariosRedesSociles1(){
     return this.getUsuarioRedesSociales()
     .pipe(
       delay(1500),
      map( data => {
        const labels = Object.keys(data);
        const valor = Object.values(data);
        return {labels, valor};
      })
     )
   }
}

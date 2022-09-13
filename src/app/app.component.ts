import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //Variables
  temp: Number = 23;
  titulo: string = 'APP prevision del tiempo';
  footer: string = 'Todos los derechos reservados';
  url: string =
    'https://i.pinimg.com/736x/3d/3d/20/3d3d2006fb63b4d3612ce408752ac3bf.jpg';

  // funciones
  incrementarTemperatura() {
    this.temp = new Number(this.temp.valueOf() + 1);
  }

  decrementarTemperatura() {
    this.temp = new Number(this.temp.valueOf() - 1);
  }
}

//EJERCICIO 4:

//1) Creamos 2 funciones dentro del componente
//a) incrementarTemperatura
//b) decrementarTemperatura

//2) Cambiar, el tipo de la variable temp y hacerla numero entero en lugar de string

//3) La funcion incrementarTemperatura va a sumarle 1 a la variable temp
//4) La funcion decrementarTemperatura hará lo contrario

//5) Vamos al template y creo 2 botones debajo de la temperatura
//a) Un botón va a ser un + y el otro el símbolo -
//b) Voy a vincular los botones con las funciones para que cuando haga click se ejecute cada función
//  <button (click)="incrementarTemperatura()">+</button>

// 10:55 - 11:00

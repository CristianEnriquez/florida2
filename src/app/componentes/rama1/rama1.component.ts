import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rama1',
  templateUrl: './rama1.component.html',
  styleUrls: ['./rama1.component.css']
})

export class Rama1Component implements OnInit {
  mostrarRama2 = true;
  bot1= false;
  bot2= false;
  messages=['11111','222222','33333','44444','55555','66666','77777','88888']
  constructor() { }

  ngOnInit() {
  }
  sera(parametro: string){
   
    if (this.mostrarRama2==false){
      this.mostrarRama2=true;
 
          }else{
            this.mostrarRama2=false;
       
          }
  }
  boton1(){
    console.log("boton1")
    if (this.bot1==true){
      this.bot1=false;
 
          }else{
            this.bot1=true;
            this.bot2=false;
          }
         
  }
  boton2(){
    console.log("boton2")
    if (this.bot2==true){
      this.bot2=false;
 
          }else{
            this.bot2=true;
            this.bot1=false;
       
          }
  }
 
}

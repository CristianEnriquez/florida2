import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rama1',
  templateUrl: './rama1.component.html',
  styleUrls: ['./rama1.component.css']
})

export class Rama1Component implements OnInit {
  mostrarRama2 = true;

  constructor() { }

  ngOnInit() {
  }
  sera(){
    if (this.mostrarRama2==false){
      this.mostrarRama2=true;
          }else{
            this.mostrarRama2=false
          }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'florida';
  mostrarRama = true;
  sera(){
    if (this.mostrarRama==false){
      this.mostrarRama=true;
          }else{
            this.mostrarRama=false
          }
  }
}

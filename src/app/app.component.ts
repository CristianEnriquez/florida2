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
  refrescar(){
    window.location.reload(false); 
  }
  sera2(){
    alert("only Epiphytes of Las Cuevas Research Station, Cayo District, Belize is working")
  }
}

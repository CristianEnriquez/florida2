
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs'
@Component({
  selector: 'app-rama2',
  templateUrl: './rama2.component.html',
  styleUrls: ['./rama2.component.css']
})
export class Rama2Component implements OnInit {
  ref: AngularFireStorageReference;
  items: Observable<any[]>;

  bot1= false;
  bot2= false;
  messages = [];
  
  
  constructor(public db: AngularFireDatabase,public stor: AngularFireStorage) {
    const id = Math.random().toString(36).substring(2);
    }

  ngOnInit() {
  }
 
  boton1(){
    console.log("boton1")
    if (this.bot1==true){
      this.bot1=false;
 
          }else{
            this.bot1=true;
            this.bot2=false;
          }
       
  this.db.list('/1149').valueChanges().subscribe((items) =>
 { 

  this.messages = [];

    
  for (let key in items) {
      this.messages.push(items[key]);
  }

  console.log("seraaaaaa ", this.messages)
},(err)=>{ console.log("probleme : ", err) });
  }
  boton2(){
    console.log("boton2")
    if (this.bot1==true){
      this.bot1=false;
 
          }else{
            this.bot1=true;
            this.bot2=false;
          }
          
 this.db.list('/1100').valueChanges().subscribe((items) =>
 { 

  this.messages = [];

    
  for (let key in items) {
      this.messages.push(items[key]);
  }

  console.log("seraaaaaa ", this.messages)
},(err)=>{ console.log("probleme : ", err) });
  }
 
  enviar(){
    this.db.list('/customers').push({
      nombre: ' Anthurium pentaphyllum (Araceae; summit; BH)' ,
      imagen: 'https://firebasestorage.googleapis.com/v0/b/florida-54c75.appspot.com/o/1149%2Fseed%2F0.jpg?alt=media&token=4868c429-0159-4998-a039-90087997f783'
     
  });
  }
}

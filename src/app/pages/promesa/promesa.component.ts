import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styleUrls: ['./promesa.component.css'],
})
export class PromesaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.getUsuarios().then((usuarios) => {
      console.log(usuarios);
    });

    // const promesa = new Promise((resolve,reject)=>{

    //   if(false){
    //     resolve('Hola Mundo')
    //   }else{
    //     reject('Algo salio mal')
    //   }
    // })

    // promesa.then((mensaje)=>{
    //   console.log(mensaje);
    // })
    // .catch((error)=>{
    //   console.log(error);
    // })

    // console.log("Fin del Init");
  }

  getUsuarios() {
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
        .then((res) => res.json())
        .then((body) => resolve(body.data));
    });
  }
}

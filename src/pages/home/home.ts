import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatosPage } from '../datos/datos';
import { AgregarPage } from '../agregar/agregar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  datos=DatosPage;
  agregar=AgregarPage;

  contacto = [

    { id: 0,
      nombre: 'Tomás Ruiz',
      imagen:"../assets/256_1.png",
      correo: 'tomasruiz@gmail.com',
      tel:'5572987210',
      face: 'tom.ruiz',
      twitter: '@tomasr',
      insta: 'tom34'},

    { id: 1,
      nombre: 'Manuel Calderón',
      imagen:"../assets/256_2.png",
      correo: 'mcalderon@gmail.com',
      tel:'3629171211',
      face: 'manu_c',
      twitter: '@manucal',
      insta: 'manuelcald'}
  

  ]

  constructor(public navCtrl: NavController) {

  }

  clickContacto(c){
    this.navCtrl.push(this.datos,c)
  }

  clickAgregar(){
    this.navCtrl.push(this.agregar, {contactos: this.contacto})
  }
}

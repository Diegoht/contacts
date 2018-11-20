import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

contactos=[];
  nombre='';
  telefono='';
  correo='';
  face='';
  twt='';
  ins='';
  inicio=HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  this.contactos=this.navParams.get('contactos')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }

  agregar(){
    if(this.nombre.length>0 && this.telefono.length>0){
        this.contactos.push(
          {
            nombre: this.nombre,
            tel: this.telefono,
            correo: this.correo,
            face: this.face,
            twitter: this.twt,
            insta: this.ins
          }
        );
        this.navCtrl.pop();
    }

    else{
      const alert = this.alertCtrl.create({
        title: 'Oops!',
        subTitle: 'El contacto debe tener nombre y teléfono',
        buttons: ['OK']
      });
      alert.present();
    }
    
  }


}

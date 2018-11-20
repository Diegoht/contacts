import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datos',
  templateUrl: 'datos.html',
})
export class DatosPage {
  name=' ';
  photo=' ';
  mail='';
  numb='';
  fb='';
  twt='';
  instagram='';


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name=this.navParams.get('nombre');
    this.photo=this.navParams.get('imagen');
    this.mail=this.navParams.get('correo');
    this.numb=this.navParams.get('tel');
    this.fb=this.navParams.get('face');
    this.twt=this.navParams.get('twitter');
    this.instagram=this.navParams.get('insta');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosPage');
  }

}



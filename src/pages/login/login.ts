import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, ToastController } from 'ionic-angular';
import { Http, Headers } from "@angular/http";
import { JwtHelper } from "angular2-jwt";
import { Storage } from "@ionic/storage";

import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  Email;
  Password;
  LOGIN_URL = 'https://clubbeneficiosuno.goodcomex.com/beneficios/public/api/login';
  api = 'https://clubbeneficiosuno.goodcomex.com/beneficios/public/api/';
  error;
  token;
  jwtHelper = new JwtHelper();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http, 
    public storage: Storage,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public menuCtrl: MenuController) {
  }

  ionViewCanEnter() {
    this.authenticate();
  }

  ionViewDidLoad() {
    this.menuCtrl.close();
  }

  keytab(event) {
      let element = event.srcElement.nextElementSibling; // get the sibling element

      if(element == null)  // check if its null
          return;
      else
          element.focus();   // focus if not null
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  me () {
    let headers = new Headers();
    headers.append('Authorization', 'Basic Z29vZGNvbWV4OmNvbWV4MDA=');
    headers.append('Authorization', this.token);
    headers.append('Content-Type', 'application/json');

    this.http.get(this.api + 'me', { headers: headers })
      .map(res => res.json())
      .subscribe(
        data => {
          this.authenticate();
        },
        err => {
          if (err.status == 401){
            this.toast('Inicie Sesion Nuevamente');
          } else if (err.status == 500) {
            
          } else {
            
          }   
        },
      );
  }

  login() {
    var loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<img src="../../assets/spinner3.gif"/>'
    });
    loading.present();

    let headers = new Headers();
    /*headers.append('Authorization', 'Basic Z29vZGNvbWV4OmNvbWV4MDA=');*/
    headers.append('Content-Type', 'application/json');

    var credentials = JSON.stringify({ email: this.Email, password: this.Password });
    this.http.post('https://clubbeneficiosuno.goodcomex.com/beneficios/public/api/login', credentials, { headers: headers })
      .map(res => res.json())
      .subscribe(
        data => { this.authSuccess(data.access_token); this.navCtrl.setRoot(HomePage, { token: this.token }); loading.dismiss(); },
        err => {
          loading.dismiss();
          if (err.status == 401){
            this.toast('Credenciales Incorrectas');
          } else if (err.status == 500) {
            this.toast('Ocurrio un error');
          } else {
            this.toast('Ocurrio un error');
          }
        },
      );
  }

  authenticate() {
    this.storage.get('token').then( data => {
      if(data != null) {
        if(data == 'token_expired') {

        }
        else if(data == undefined) {

        }
        else {
          this.navCtrl.setRoot(HomePage, { token: data });
        }
      }
    });
  }

  authSuccess(token) {
    this.error = null;
    this.storage.set('token', token);
    this.token = token;
    var sub = this.jwtHelper.decodeToken(token).sub;
    this.storage.set('profile', sub);
  }

  toast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }

}

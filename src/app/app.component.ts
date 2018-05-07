import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { PerfilPage } from '../pages/perfil/perfil';
import { LoginPage } from '../pages/login/login';
import { OpcionesPage } from '../pages/opciones/opciones';
import { PasswordPage } from '../pages/password/password'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = LoginPage;

  pages: Array<{ title: string, component: any }>;

  constructor(platform: Platform, statusBar: StatusBar, public splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      this.hideSplashScreen();
    });
    this.pages = [
      { title: 'Login', component: LoginPage },
      { title: 'Register', component: RegisterPage },
      { title: 'Perfil', component: PerfilPage },
      { title: 'Contraseña', component: PasswordPage },
      { title: 'Opciones', component: OpcionesPage }
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }

  hideSplashScreen() {
    if (this.splashScreen) {
      setTimeout(() => {
        this.splashScreen.hide();
      }, 100);
    }
  }

  // navigateToBuscar(){
  //   this.nav.push('HomePage', {param1: '1'});
  // }
  // navigateToBeneficios(){
  //   this.nav.push('HomePage', {param1: '2'});
  // }
  // navigateToNovedades(){
  //   this.nav.push('HomePage', {param1: '3'});
  // }


  // onSegmentChange(event)
  // {
  //     if(event)
  //     {
  //         this.nav.push('HomePage', {param1: '1'});
  //         console.log(event);
          
  //     }
  //     this.initMap();
  // }
    
}


import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ConfigurarPage } from '../pages/configurar/configurar';
import { AjudaPage } from '../pages/ajuda/ajuda';
import { SobrePage } from '../pages/sobre/sobre';
import { EventosPage } from '../pages/eventos/eventos';


import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = TabsControllerPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToConfigurar(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ConfigurarPage);
  }goToAjuda(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AjudaPage);
  }goToSobre(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SobrePage);
  }goToEventos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EventosPage);
  }
}

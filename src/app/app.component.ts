import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { GalleryPage } from '../pages/gallery/gallery';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // Configuracion de ionic para definir el rootPage
  @ViewChild(Nav) nav: Nav;

  // rootPage sera la primera page que se muestre
  rootPage = HomePage;

  // pages define el tipado de los elementos del menu 
  pages: Array<{title: string, component: any}>;
  

  constructor(public platform: Platform) {
    // se inicializa la app
    this.initializeApp();

    // se definen los elementos del menu
    this.pages = [
      { title: 'Home', component: HomePage},
      { title: 'Galeria', component: GalleryPage}
    ];
}

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  // define el rootPage en la page pasado por parametro
  goTo(page){
    this.nav.setRoot(page.component);
  }
}

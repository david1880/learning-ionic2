import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { ImageService } from './services/image.service';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GalleryPage } from '../pages/gallery/gallery';
import { ImagePage } from '../pages/image/image';

@NgModule({
  declarations: [     // hace visibles los components para la app
    MyApp,
    HomePage,
    GalleryPage,
    ImagePage
  ],
  imports: [          // importa los modulos necesarios
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [  // habilita la creacion de los componentes por el ¿ion-nav?
    MyApp,
    HomePage,
    GalleryPage,
    ImagePage
  ],
  providers: [        // se declaran los servicios
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ImageService
  ]
})
export class AppModule {}

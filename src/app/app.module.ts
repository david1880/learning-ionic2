import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { ImageService } from './services/image.service';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GalleryPage } from '../pages/gallery/gallery';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GalleryPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GalleryPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ImageService
  ]
})
export class AppModule {}

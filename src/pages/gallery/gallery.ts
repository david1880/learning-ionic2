import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImageService } from '../../app/services/image.service';
import { ImagePage } from '../image/image';

@Component({
    selector: 'page-gallery',
    templateUrl: 'gallery.html'
})
export class GalleryPage implements OnInit {
    constructor(
        public navCtrl: NavController,
        private iService: ImageService
    ) { }
    private list = [];
    ngOnInit(){
        this.iService.getAll().subscribe(
            response => {
                this.list = response.json();
                this.list = this.list.slice(0,10);
            },
            error => {console.log(error);
            }
        );
    }

    itemTapped(item){
        this.navCtrl.push(ImagePage,
            {image:item}
        );
    }


}
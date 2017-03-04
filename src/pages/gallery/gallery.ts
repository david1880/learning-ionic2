import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImageService } from '../../app/services/image.service';

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
                this.list = this.list.slice(0,50);
            },
            error => {console.log(error);
            }
        );
    }


}
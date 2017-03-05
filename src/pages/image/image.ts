import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
    selector: 'page-image',
    templateUrl: 'image.html'
})
export class ImagePage implements OnInit {
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) { }
    private selected;
    ngOnInit() {
        this.selected = this.navParams.get('image');
    }
}
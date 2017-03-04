import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ImageService {

    constructor(
       private http:Http
    ) { }

    getAll(){
        return this.http.get('https://jsonplaceholder.typicode.com/photos');
    }
}
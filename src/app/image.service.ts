import { Injectable } from '@angular/core'    
@Injectable()    
export class ImageService {    
    allImages = [];    
    
    getImages() {    
        return this.allImages = Imagesdelatils.slice(0);    
    }    
    
    getImage(id: number) {    
        return Imagesdelatils.slice(0).find(Images => Images.id == id)    
    }    
}    
const Imagesdelatils = [    
    { "id": 1, "brand": "Apple", "url": "assets/image/doctor.jpg" },    
    { "id": 2, "brand": "Apple", "url": "assets/image/doctor2.jpg" },    
    { "id": 3, "brand": "Apple", "url": "assets/image/eent.jpg" },    
    { "id": 4, "brand": "Apple", "url": "assets/image/eent1.jpg" },    
    { "id": 5, "brand": "hp", "url": "assets/image/eye.jpg" },    
    { "id": 6, "brand": "hp", "url": "assets/image/eyes.jpg" },
    { "id": 7, "brand": "Lenovo", "url": "assets/image/friendly.jpg" },    
    { "id": 8, "brand": "Lenovo", "url": "assets/image/icon.jpg" },    
    { "id": 9, "brand": "asus", "url": "assets/image/nasal.jpg" },    
    { "id": 10, "brand": "asus", "url": "assets/image/neck.jpg" }
]
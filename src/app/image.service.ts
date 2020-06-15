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
    { "id": 1, "brand": "Apple", "url": "assets/image/ear1.png" },    
    { "id": 2, "brand": "Apple", "url": "assets/image/ear2.png" },    
    { "id": 3, "brand": "Apple", "url": "assets/image/ear3.png" },    
    { "id": 4, "brand": "Apple", "url": "assets/image/ear4.png" },  
    { "id": 5, "brand": "Apple", "url": "assets/image/ear5.png" },   
    { "id": 6, "brand": "hp", "url": "assets/image/nakh1.png" },    
    { "id": 7, "brand": "hp", "url": "assets/image/nakh2.png" },
    { "id": 8, "brand": "hp", "url": "assets/image/nakh3.png" },
    { "id": 9, "brand": "hp", "url": "assets/image/nakh4.png" },
    { "id": 10, "brand": "hp", "url": "assets/image/nakh5.png" },    
    { "id": 11, "brand": "hp", "url": "assets/image/nakh6.png" },
    { "id": 12, "brand": "hp", "url": "assets/image/nakh7.png" },
    
    { "id": 13, "brand": "Lenovo", "url": "assets/image/neck1.png" },    
    { "id": 14, "brand": "Lenovo", "url": "assets/image/neck2.png" },    
    { "id": 15, "brand": "Lenovo", "url": "assets/image/neck3.png" },    
    { "id": 16, "brand": "Lenovo", "url": "assets/image/neck4.png" },
    { "id": 17, "brand": "Lenovo", "url": "assets/image/neck5.png" },    
    { "id": 18, "brand": "Lenovo", "url": "assets/image/neck6.png" },    
    { "id": 19, "brand": "Lenovo", "url": "assets/image/neck7.png" },    
    { "id": 20, "brand": "Lenovo", "url": "assets/image/neck8.png" },
]
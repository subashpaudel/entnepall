import { Component, OnInit, Input, OnChanges } from '@angular/core';    
import { ImageService } from '../image.service';    
    
@Component({    
  selector: 'app-imagegallery',    
  templateUrl: './image-gallery.component.html',    
  styleUrls: ['./image-gallery.component.scss']    
})    
    
export class ImageGalleryComponent implements OnChanges {    
  images:any[];    
  filterBy?: string = 'all'    
 allImages:any[] = [];    
    
  constructor(private imageService: ImageService) {    
    this.allImages = this.imageService.getImages();    
  }    
  ngOnChanges() {    
    this.allImages = this.imageService.getImages();    
  }    
}   
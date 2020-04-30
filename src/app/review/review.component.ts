import { Component, OnInit,AfterViewInit } from '@angular/core';
import { environment } from 'src/environments/environment';
declare const google: any;

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements AfterViewInit {
  service;
  public reviews = [];
  constructor() { }

  ngAfterViewInit(){
    const request = {
      placeId: 'ChIJ1UKs1WOHljkRw2UprA7OOHc',
      fields: ['reviews']
    };
    this.service = new google.maps.places.PlacesService(document.getElementById('googleReviews'));

    this.service.getDetails(request, this.callback);
  }

  public callback = (place, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      this.reviews = place.reviews.slice();
    }
  };

  createRange(number) {
    const items: number[] = [];
    for (let i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }
}

 

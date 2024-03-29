import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri = 'http://localhost:4000/appointment';

  constructor(private http: HttpClient) { }

  addInfo(Name, Email, Phone, Time, Message) {
    const obj = {
      Name,
      Email,
     Phone,
     Time,
     Message
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
}
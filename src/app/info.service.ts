import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InfoService {

  uri = 'mongodb+srv://subash:<password>@cluster0-psl7u.mongodb.net/<dbname>?retryWrites=true&w=majority';

  constructor(private http: HttpClient) {

   }
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

  getinfo() {
    return this
           .http
           .get(`${this.uri}`);
  }
  deleteInfo(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}

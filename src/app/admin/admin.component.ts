import { Component, OnInit } from '@angular/core';
import Info from '../Info';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  info: Info[];

  constructor(private is: InfoService) { }

  ngOnInit() {
    this.is
      .getinfo()
      .subscribe((data: Info[]) => {
        this.info = data;
    });
  }

  deleteInfo(id) {
    this.is.deleteInfo(id).subscribe(res => {
      this.info.splice(id, 1);
    });
}
  }



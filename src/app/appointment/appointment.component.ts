import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  angForm: FormGroup;
  msg: string = null;
  constructor(private fb: FormBuilder,private is: InfoService) {
    this.createForm();
   }
   
   createForm() {
    this.angForm = this.fb.group({
      Name: ['', Validators.required ],
      Email: ['', Validators.required ],
      Phone: ['', Validators.required ],
      Time: ['', Validators.required ],
      Message: ['', Validators.required ]
    });
  }
  addInfo(Name, Email,Address, Phone, Time, Message) {
    this.is.addInfo(Name, Email,Address, Phone, Time, Message);
    this.angForm.reset();
    this.msg = 'successfully sent';
  }

  ngOnInit() {
  }

}

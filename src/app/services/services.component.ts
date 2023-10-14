import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  data= [
    {
      name:'nandu',
      age:22,
      Qualification:'UG',
      sal:30000
    },
    {
      name:'ram',
      age:32,
      Qualification:'B-tech',
      sal:25000
    },
    {
      name:'kiran',
      age:28,
      Qualification:'MCA',
      sal:80000
    }, {
      name:'srinu',
      age:42,
      Qualification:'pg',
      sal:687890
    }
  ]
}

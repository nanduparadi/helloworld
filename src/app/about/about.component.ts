import { Component } from '@angular/core';
import { MobileService } from '../mobile.service';

@Component({
  selector: '',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {

  txt_name:string = "";
  txt_price:string = "";
  txt_ram!: number;
  txt_storage! : number;

  mobileArry:Array<any> = [];

  constructor(private ms:MobileService){
    // this.txt_name = "";
    // this.txt_price = "";
    // this.txt_ram;
    // this.txt_storage;
    // this.mobileArry = [];
  }
  mobiles=[
    {
      name:"xyz",
      price:20000,
      ram:6,
      storage:64
    },
    {
      name:"abc",
      price:10000,
      ram:4,
      storage:16
    }
  ];
  mobileName = "";
  fromHeader = "Add Mobile"

  showFrom = false;

  openForm(){
    this.showFrom=true;
  }
closeForm(){
  this.txt_name = ""
  this.txt_price = "";
  this.txt_ram;
  this.txt_storage;
  this.showFrom = false;
}
saveMobile(){
   this.mobileArry.push({
    "name" : this.txt_name,
    "price" : this.txt_price,
    "ram" : this.txt_ram,
    "storage": this.txt_storage
  })

  console.log(this.mobileArry);
}

}

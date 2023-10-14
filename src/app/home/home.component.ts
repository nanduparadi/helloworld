import { Component ,Input} from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input()
  demo!: string;



  // count=0;
  // increment(){
  //   this.count=this.count+1
  // }

  // name !: string;

  name!:string;
  email!:string;
  gender!:string;
  cars!:string;
  date!:Date;

  storeData:Array<any>=[];
  show(){
    this.storeData.push({
     "Username":this.name,
      "Useremail":this.email,
      "Gender":this.gender,
      Carmama:this.cars,
      "date":this.date

    })
    console.log(this.storeData)
  }



  isAddMobile : boolean = true;
  mobilesArry:Array<any>=[];
  txt_Brand:string;
  txt_ModelName:string;
  txt_Memory:string;


 constructor(){
    this.isAddMobile = true;
    this.txt_Brand = "";
    this.txt_ModelName = "";
    this.txt_Memory = "";
  }

  showMobile(){
    this.isAddMobile = true;
  }
  addMobile(){
      this.mobilesArry.push({
      "Brand" : this.txt_Brand,
      "Model" : this.txt_ModelName,
      "Memory" : this.txt_Memory
    });
    console.log(this.mobilesArry);


  }




}

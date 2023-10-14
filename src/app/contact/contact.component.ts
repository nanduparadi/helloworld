import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {

  regForm!: FormGroup;

  constructor(private fb:FormBuilder){   }
  usersList:any= [];

      ngOnInit(): void{
        this.regForm= this.fb.group({
    //  uName: new FormControl("john",[Validators.required,Validators.minLength(8)]),
    //  email: new FormControl("xyz@gmail.com",[Validators.required,Validators.email])

    uName: new FormControl ('',[ Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email])
  })
 
}
show(){
  if (this.regForm.invalid) {
    for (const control of Object.keys(this.regForm.controls)) {
      this.regForm.controls[control].markAsTouched();
    }
    return;
  }
  // for(const control of Object.keys(this.regForm.controls)){
  //   this.usersList.push(control);
  // }
  this.usersList = this.regForm.value;
  console.log(this.usersList);
  console.log(this.regForm)   

 console.log(this.regForm.value)   
  console.log(this.regForm.value.uName)   

}
  get uName() {
    return this.regForm.get("uName")!;
  }
  get email() {
    return this.regForm.get("email")!;
  }


}

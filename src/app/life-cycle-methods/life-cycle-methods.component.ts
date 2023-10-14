import { AfterContentChecked, Component,Input,OnChanges,OnInit, SimpleChange, SimpleChanges,AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-life-cycle-methods',
  templateUrl: './life-cycle-methods.component.html',
  styleUrls: ['./life-cycle-methods.component.css']
})
export class LifeCycleMethodsComponent{
  @Input() user :string = '';
  @Input() item :string = '';
  constructor(){
    console.log("constructor called")
  }
 
  // ngOnChanges(changes: SimpleChanges){
  //   console.log("ngOnchanges called");
  //   console.log(changes);
  // }
  // ngOnInit(){
  //   console.log("ngOnInit called")
  //}
  // ngDoCheck(){
  // console.log("ngDocheck called")
  // }
  // ngAfterContentInit(){
  //   console.log("ngAfter Content Init called")
  // }
  // ngAfterContentChecked(){
  //   console.log("ngAfter Content Checked called")
  // }
  // ngAfterViewInit(){
  //   console.log("ngAfter ViewInit called");
  // }
  // ngAfterViewChecked(){
  //   console.log("ngAfter View Checked called");
  // }
 
  // ngOnDestroy(){
  //   console.log("onDestroy called")
  // }

  // destroy(){
  //   console.log("all are destroyed")
  // }
  
  

  
 
}

import { Component ,OnInit ,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnDestroy {
  constructor(){
    console.log("child constructor is called")
  }
  ngOnInit():void{
    console.log("child OnInit is called")
  }
  
  ngOnDestroy() {
      console.log("Child OnDestroy is called")
  }
}


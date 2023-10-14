
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent  {
  public menuarray : Array<string> = ['Home','About','Services','Contact','Form'];

  data = "this is my data";
  passtoParent(){
    return this.data;
  }

  constructor() { }

  
}

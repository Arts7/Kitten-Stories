import { Component, OnInit } from '@angular/core';
import { cat, catList } from '../cat';
import { AstMemoryEfficientTransformer } from '@angular/compiler';





@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent implements OnInit {
  

  public catName:string;
  public catRace:string;
  public catBD:string;
  public urlImg:string;
  public valid:boolean = false;
  public displayDiagnostic = true;
  onSubmit() {
    
    let mon_chat:cat = new cat();
    mon_chat.catName = this.catName;
    mon_chat.catRace = this.catRace;
    mon_chat.catBD = this.catBD;
    mon_chat.urlImg = this.urlImg;


    catList.push(mon_chat);
  }

  constructor() {

  }

ngOnInit() {
}

}

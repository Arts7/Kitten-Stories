import { Component, OnInit } from '@angular/core';
import { cat, catList, catUser } from '../cat';
@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent implements OnInit {
  public catUser:cat[];
  public catName:string;
  public catRace:string;
  public catBD:string;
  public urlImg:string;
  public updateCat = catUser;
  constructor() { 
    
  }
  

  ngOnInit() {
  }

}

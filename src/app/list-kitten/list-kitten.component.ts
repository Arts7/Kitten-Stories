import { Component, OnInit } from '@angular/core';
import { cat, catList, catUser } from '../cat';


@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent implements OnInit {

  public list:cat[];
  public catName:string;
  public catRace:string;
  public catBD:string;
  public urlImg:string;
  
  constructor() { 
    this.list = catList;
  }

  adopt(miaou){
    
    catUser.push(miaou);
    catList.splice(catList.indexOf(miaou),1);
  }
  ngOnInit() {
  }

}

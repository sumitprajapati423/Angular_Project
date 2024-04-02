import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  num = "this is parent page"
  ts = "20px"
  col= "red"
  imgpath= 'https://cdn.pixabay.com/photo/2023/09/16/21/31/girl-8257551_1280.jpg'
  brr= "yellow"


  childData : undefined | any
childvalue: any;
  getDataFormChild(e:any){
    this.childData = e
  }
}

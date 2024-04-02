import { Route, Router } from '@angular/router';
import { CartService } from './../../services/cart.service';

import { Component } from '@angular/core';
import { UserapiService } from 'src/app/services/userapi.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
searchProduct($event: KeyboardEvent) {
throw new Error('Method not implemented.');
}
ProductDetail:any
public totalItem :number= 0;
    constructor( private usersev: UserapiService, private CartService:CartService, private route:Router, ){

  // console.log(this.userDetail)
  // this.getDitails()
}


//  life cycle hook --which will load the data (inilialise data ) when componenet get lode
ngOnInit(): void {
  this.ProductDetail = this.usersev.Product
      // console.log(this.ProductDetail)
      this.Detail = this.ProductDetail
      this.CartService.getProduct()
      .subscribe(res=>{
          this.totalItem = res.length;
      })
      // this.getDitails()
}


// search button-----------
getName:any="    "

  Detail:any
  getDitails(Name:any){

  let newDetails:any = []
  // console.log(this.getName)
      for( let i of this.ProductDetail){
        // console.log(i)
        if(Name == ""){
          this.Detail = this.ProductDetail
        }
        else if (i .name.includes(Name)){
          console.log(i)
          newDetails.push(i)
          this.Detail= newDetails
        }
      }
  }
}

import { CartService } from './../../services/cart.service';

import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductapiService } from 'src/app/services/productapi.service';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent {
  constructor(private prod: ProductapiService, private activate: ActivatedRoute, private router: Router, private CartService: CartService  ){}

  productid: any
  productCat :any
  ngOnInit(){
    this.activate.params.subscribe((urlid)=>{
      console.log(urlid)
      this.productid = urlid["id"]
      this.productCat = urlid["cat"]
    })
    this.getProductfun();
    
  }

  productdata : any
  getProductfun(){
    this.prod.searchByCat(this.productCat, this.productid).subscribe((data)=>{
      this.productdata = data
      console.log(this.productdata)
    })
  }

  product:any
  showproduct(cat:any, id:any){
    this.router.navigate(["product/addcart",cat,id])
  }

  addtoCart(productdata:any){
    this.CartService.addtoCart(productdata)
  }


}

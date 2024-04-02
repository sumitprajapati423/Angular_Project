import { CartService } from './../../services/cart.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

public product : any = [];
public grandTotal !: number;
constructor(private CartService: CartService){}

ngOnInit():void {
  this.CartService.getProduct()
  .subscribe(res=>{
    this.product = res;
    this.grandTotal = this.CartService.getTotalPrice();

  })
}

removeItem(product:any){
  this.CartService.removeCartItem(product);
}

emptycart(){
  this.CartService.removeAllCart();
}
}

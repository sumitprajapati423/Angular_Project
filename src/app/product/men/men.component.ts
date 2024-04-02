import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductapiService } from 'src/app/services/productapi.service';
import { UserapiService } from 'src/app/userapi.service';


@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {

  colorTs='green'

 public productlist : any ;
//  searchKey:string ="";
totalItem : any;
searchResults:any;
searchKeyWord:any;
model:any
  constructor(private prod : ProductapiService, private router: Router, private CartService:CartService,private usersev: UserapiService,){
  }

  ngOnInit(){
      this.getProductFun();
      this.prod.getProductDetails()
    .subscribe(res=>{
      this.productdata = res;

      this.productdata.forEach((a:any) => {
        Object.assign(a,{quantity:1 , total:a.price});
      }
    )})

    // this.spinner.show();
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 2000);
  }


  productdata:any='';
  getProductFun(){
    this.prod.getProductDetails().subscribe((data)=>{
      this.productdata= data;
    })
  }

  showproduct(cat:any, id:any){
    this.router.navigate(["product/showproduct",cat,id])
  }

  addtoCart(product:any){
    this.CartService.addtoCart(product)
  //   alert (product.title+"add to cart")
  //   product.qty = 1
  //   let flag = true
  //   if(this.prod.cartdata.lenth > 0){
  //       for(this.productdata of this.prod.cartdata){
  //         if(this.productdata.title == this.productdata.title){
  //           this.productdata.qty = this.productdata.qty +1
  //           flag=true
  //             break
  //       }
  //       else{
  //         flag=false
  //         continue
  //       }
  //   }
  //   if(flag == false){
  //     this.prod.cartdata.push(this.productdata)
  //   }
  // }
  // else{
  //   this.prod.cartdata.puch(this.productdata)
  // }

  }

  search_data(data:any){
    console.log('Hello search worked',data.value.search)
    const filterProd = this.productdata.filter((item: any) => {


      const newData = item.title.toLowerCase().includes(data.value.search.toLowerCase());
      return newData;

//       if (item.title) {
//         // Convert both title and search query to lowercase for case-insensitive comparison
//         return item.title.toLowerCase().includes(data.target.value.toLowerCase());
//       } else {
//         return false; // Return false if title is undefined
//       }
    });

    console.log(filterProd);
    this.productdata = filterProd


}
}

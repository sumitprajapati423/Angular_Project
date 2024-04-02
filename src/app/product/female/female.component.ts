import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductapiService } from 'src/app/services/productapi.service';

@Component({
  selector: 'app-female',
  templateUrl: './female.component.html',
  styleUrls: ['./female.component.css']
})
export class FemaleComponent {

  searchResults:any;
  searchKeyWord:any;
  model:any
  constructor(private prod : ProductapiService, private router: Router,private CartService:CartService){
  }

  ngOnInit(){
      this.getProductFun()
      this.prod.getwomanDetails()
      .subscribe(res=>{
        this.womandata = res;

        this.womandata.forEach((a:any) => {
          Object.assign(a,{quantity:1 , total: a.price})
        }
      )})
  }

  womandata:any='';
  getProductFun(){
    this.prod.getwomanDetails().subscribe((data)=>{
      this.womandata= data;
      console.log(this.womandata)
    })
  }

  showproduct(cat:any , id:any){
    this.router.navigate(["product/showproduct",cat,id])

  }

  addtoCart(woman:any){
    this.CartService.addtoCart(woman)
  }


  search_data(data:any){
    console.log('Hello search worked',data.value.search)
    const filterProd = this.womandata.filter((item: any) => {


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
    this.womandata = filterProd


}

}

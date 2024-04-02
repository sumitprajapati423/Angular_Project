import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductapiService } from 'src/app/services/productapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  

  constructor(private prod : ProductapiService, private router: Router){
  }

  ngOnInit(){
      this.getProductFun()
  }
  productdata:any=[];
  getProductFun(){
    this.prod.getProductDetails().subscribe((data)=>{
      this.productdata= data;
      console.log(this.productdata)
      this.prod.getwomanDetails().subscribe((data:any)=>{
        this.productdata = this.productdata.concat(data)
        console.log(this.productdata)
      })
    })


  }

  // create a new product to add
  addProduct(){
    this.router.navigate(["product/addproduct"])
  }

//  this is image click showfuction to other pase
  showproduct(id:any){
    this.router.navigate(["product/showperoduct",id])
  }

// Delete button run---
  deleteProdFun(id:any){
    this.prod.deleteProductDetails(id).subscribe(()=>{
      this.getProductFun()
      alert("product has been deletes")
    })
  }

// update product---------
  updateProduct(id:any){
    console.log(id)
    this.router.navigate(["product/update-product",id])
  }

}


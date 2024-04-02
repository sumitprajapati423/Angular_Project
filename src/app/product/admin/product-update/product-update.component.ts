import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductapiService } from 'src/app/services/productapi.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent {

  constructor( private serv: ProductapiService, private activate: ActivatedRoute){}

  productId:any
  ProductData: any
  imgPath: any
  ngOnInit(){
    this.activate.params.subscribe((sid)=>{
      this.  productId = sid["id"]
      console.log(this.productId)
    })
    this.serv.searchProductDetails(this.productId).subscribe((data)=>{
      this.ProductData = data
      console.log(this.ProductData)
      this.ReactiveFormData.patchValue({
        id:this.ProductData.id,
        title:this.ProductData.title,
        price:this.ProductData.price,
        category:this.ProductData.category,
        rating:this.ProductData.rating,
      })
     this.imgPath = this.ProductData.image

    })
  }

  ReactiveFormData = new FormGroup({
    id: new FormControl(""),
    title: new FormControl(""),
    price: new FormControl(""),
    category: new FormControl(""),
    image: new FormControl(""),
    rating: new FormControl("")
    })
    submitfun(){
      this.ReactiveFormData.patchValue({
        image: this.imgPath
      })
      console.log(this.ReactiveFormData.value)
      this.serv.putProductDetails(this.ReactiveFormData.value, this.productId).
      subscribe(()=>{
        alert(this.ProductData.title+"has been updated!")
      })
    }

    changeImg(event:any){
      let file= event.target.files[0]
      console.log(event,file)

    let fileRead = new FileReader()
    fileRead.readAsDataURL(file)
    fileRead.onload = ()=>{
      this.imgPath = fileRead.result
      console.log(this.imgPath)
    }
    }
  }




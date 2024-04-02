import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductapiService } from 'src/app/services/productapi.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  event: any;

  // Dependency injection
    //  rating: this.fb.group({
    //       rate:[""],
    //       count:[""]
    //      })

  constructor( public fb: FormBuilder, private serv: ProductapiService){}

  reactiveFormData = this.fb.group({
    id:[""],
      title:[""],
      price:[""],
      category:[""] ,
      image: [""],
      rating:[""]
  })
  submitfunction(){
    this.reactiveFormData.patchValue({
      image:this.imgPath
    })
    console.log(this.reactiveFormData.value)
    this.serv. postProductDetails(this.reactiveFormData.value).subscribe(()=>{
      alert("product data Added!")
    })
  }
  imgPath:any
  changeImg(event:any){
    let file = event.target.files[0]
    console.log(event,file)

    // base64 format -- file
    let fileRead = new FileReader()
    fileRead.readAsDataURL(file)
    fileRead.onload = ()=>{
      this.imgPath = fileRead.result
      console.log(this.imgPath)
    }
  }


}

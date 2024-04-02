import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductapiService {

  // dependencies injectable method ---
  constructor(private http: HttpClient ) { }
  // cartdata:any =[]
  
  productApiUrl = "http://localhost:3000/Product"
  womenApiUrl = "http://localhost:3000/woman"



  getProductDetails(){
    return this.http.get(this.productApiUrl,)
  }


    searchProductDetails(id:any){
      return this.http.get(`${this.productApiUrl}/${id}`)
    }

//Detele Api
    deleteProductDetails(id:any){
      return this.http.delete(`${this.productApiUrl}/${id}`)
    }

//Post Api
    postProductDetails(FormData:any){
      return this.http.post(this.productApiUrl, FormData)
    }


// PUT Api ---- Update Product
    putProductDetails(FormData:any, id:any){
      return this.http.put(`${this.productApiUrl}/${id}`,FormData)
    }


// Cat function create------------------
    newproductApiUrl = "http://localhost:3000"
    searchByCat(cat:any, id:any){
      return this. http.get(`${this.newproductApiUrl}/${cat}/${id}`)
    }

    getwomanDetails(){
      return this.http.get(this.womenApiUrl,)
    }

    SearchProduct(query:string){
      return this.http.get<ProductapiService[]>(`http://localhost:3000/product?q=$(query)`)
    }
}

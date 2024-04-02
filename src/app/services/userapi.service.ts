import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {

  //  auth gourd call userApi...
  // constructor(private http: HttpClient) { }
  // userApi = "http://localhost:3000"

  // profileLogin(userProfile:any){
  //   return this.http.get(`${this.userApi}/${userProfile}`)
  // }

  constructor(private http: HttpClient){}
  newproductApiUrl = "http://localhost:3000"
  profileLogin(userProfile:any){
      return this.http.get(`${this.newproductApiUrl}/${userProfile}`)
    }
  "Product": [
    {
      "id": 1,
      "title": "Cotton Blend Round Short Printed corton  Neck Full Sleeve Printed Tshirt",
      "price": "1250",
      "category": "",
      "image": "https://m.media-amazon.com/images/I/41jS6G2yFTL._AC_UL480_QL65_.jpg",
      "rating": 4.6
    },
    {
      "id": 2,
      "title": "Designer Full Short Printed Neck corton  Kurta for Men",
      "price": "4000",
      "category": " Kurta for Men",
      "image": "https://m.media-amazon.com/images/I/81BREDegIAL._AC_UL480_FMwebp_QL65_.jpg",
      "rating": 4.9
    },
    {
      "id": 3,
      "title": "DHRUVI TRENDZ  Designer Full Short  Men Mens Shirt",
      "price": "350",
      "category": "Mens Shirt",
      "image": "https://m.media-amazon.com/images/I/71Jl4DbJUjL._AC_UL480_FMwebp_QL65_.jpg",
      "rating": 1.9
    },
    {
      "id": 4,
      "title": "IndoPrimo Men's corton normal Regular Fit Casual Shirt",
      "price": "499",
      "category": "formal man",
      "image": "https://m.media-amazon.com/images/I/71yM0xUAetL._AC_UL480_FMwebp_QL65_.jpg",
      "rating": 3.2
    },
    {
      "id": 5,
      "title": "BE ACTIVE Men's Casual corton normal Shirts",
      "price": "499",
      "category": "formal",
      "image": "https://m.media-amazon.com/images/I/612pjOcxQJL._AC_UL480_FMwebp_QL65_.jpg",
      "rating": 3.2
    },
    {
      "id": 6,
      "title": "Dennis Lingo Men's Checkered Slim Fit Cotton Casual Shirt",
      "price": "399",
      "category": "formal",
      "image": "https://m.media-amazon.com/images/I/61DGAlvxRLL._SY879_.jpg",
      "rating": 2.2
    },
    {
      "id": 7,
      "title": "LEOTUDE Men's Oversized  Half Sleeve Printed Tshirt",
      "price": "299",
      "category": "formal",
      "image": "https://m.media-amazon.com/images/I/61CxYdukSIL._AC_UL480_FMwebp_QL65_.jpg",
      "rating": 2
    },
    {
      "id": 8,
      "title": "Levi's Men Shirt sleevs Cottonblend Half normal shirt man",
      "price": "399",
      "category": "formal",
      "image": "https://m.media-amazon.com/images/I/7198iwwPHlL._AC_UL480_FMwebp_QL65_.jpg",
      "rating": 2.8
    },
    {
      "id": 9,
      "title": "Lymio Men T-Shirt || T-Shirt for Men || Plain T Shirt",
      "price": "299",
      "category": "formal",
      "image": "https://m.media-amazon.com/images/I/71qrf7J+HmL._SY879_.jpg",
      "rating": 2
    },
    {
      "id": 10,
      "title": "Dennis Lingo Men's Solid Slim Fit Casual Shirt",
      "price": "499",
      "category": "formal",
      "image": "https://m.media-amazon.com/images/I/81b5cEI0MJL._AC_UL480_FMwebp_QL65_.jpg",
      "rating": 2
    },
    {
      "id": 11,
      "title": "EYEBOGLER  Sleeve Striped Print Casual Men Tshirt",
      "price": "299",
      "category": "formal",
      "image": "https://m.media-amazon.com/images/I/51byp5tQ86L._AC_UL480_FMwebp_QL65_.jpg",
      "rating": 2
    },
    {
      "id": 12,
      "title": "UNIBLISS Men's Casual Shirt Printed Rayon Halfsleeve",
      "price": "299",
      "category": "formal",
      "image": "https://m.media-amazon.com/images/I/61FleZG8eFL._SX679_.jpg",
      "rating": 2
    }
  ]
  "woman": [
    {
      "id": 1,
      "title": "Fashion Dream Girl's Knee Length Dress ",
      "price": "1200",
      "category": "Length Dress",
      "image": "https://m.media-amazon.com/images/I/81PFOQF29sL._SY879_.jpg",
      "rating": 2.9
    },
    {
      "id": 2,
      "title": "Girlâ€™s Georgette Dress",
      "price": "599",
      "category": "Georgette ",
      "image": "https://m.media-amazon.com/images/I/61UIDB6j96L._AC_UL480_FMwebp_QL65_.jpg",
      "rating": 4.9
    },
    {
      "id": 3,
      "title": "Jwalin Girls Crepe  Foil Printed Dress Yr",
      "price": "750",
      "category": "Printed Dress",
      "image": "https://m.media-amazon.com/images/I/81JkZBzVxRL._AC_UL480_FMwebp_QL65_.jpg",
      "rating": 4.4
    },
    {
      "id": 4,
      "title": "Fashion Dream Girl's  Fit and Flared Dresses",
      "price": "899",
      "category": "Flared Dresses",
      "image": "https://m.media-amazon.com/images/I/81lhBabyjlL._AC_UL480_FMwebp_QL65_.jpg",
      "rating": 2.8
    },
    {
      "id": 5,
      "title": "Nena Fashion Girl Above the Knee Length Dress",
      "price": "1110",
      "category": "Knee Length Dress",
      "image": "https://m.media-amazon.com/images/I/51aC2AFzU-L._AC_UL480_FMwebp_QL65_.jpg",
      "rating": 3.9
    },
    {
      "id": 6,
      "title": "Fashion Dream Girl's most disign Length Flared Dresses",
      "price": "999",
      "category": "Flared Dresses",
      "image": "https://m.media-amazon.com/images/I/61PB9wkovpL._AC_UL480_FMwebp_QL65_.jpg",
      "rating": 5.9
    },
    {
      "id": 7,
      "title": "Fashion Dream Girl's most disign  Length Flared Dresses",
      "price": "1050",
      "category": "Flared Dresses",
      "image": "https://m.media-amazon.com/images/I/81zDVWoGZHL._AC_UL480_FMwebp_QL65_.jpg",
      "rating": 2.9
    },
    {
      "id": 8,
      "title": "TEQVYZ Net Stitched Flared/A-line Gown for Girls",
      "price": "1250",
      "category": "Gown for Girls",
      "image": "https://m.media-amazon.com/images/I/41JAToHPuwL.jpg",
      "rating": 4.9
    },
    {
      "id": 9,
      "title": "Girls Taffeta Maxi Length Foil Printed Dresses",
      "price": "850",
      "category": "Printed Dresses",
      "image": "https://m.media-amazon.com/images/I/71IbRgnbmoL._SY879_.jpg",
      "rating": 4.9
    },
    {
      "id": 10,
      "title": "Fashion Dream Girls Maxi Length Flared Dresses",
      "price": "650",
      "category": "Dresse",
      "image": "https://m.media-amazon.com/images/I/81hkPWClWgL._SY879_.jpg",
      "rating": 4.9
    },
    {
      "id": 11,
      "title": "Fashion Dream Girls Maxi Length Flared Dress",
      "price": "900",
      "category": "Length Flared Dress",
      "image": "https://m.media-amazon.com/images/I/71+l58oCzqL._AC_UL480_FMwebp_QL65_.jpg",
      "rating": 4.9
    },
    {
      "id": 12,
      "title": " Girl's Silk Blend Plating Design Long Maxi Gown",
      "price": "1250",
      "category": "Maxi Gown",
      "image": "https://m.media-amazon.com/images/I/51xSl9GazTL._AC_UL480_FMwebp_QL65_.jpg",
      "rating": 4.9
    }
  ]
}


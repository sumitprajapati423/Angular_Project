import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ProductapiService } from '../services/productapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
// searchResult:undefined|ProductapiService[];
  // constructor( private activeRoute:ActivatedRoute, private product:ProductapiService ){ }


  // -----------------Searchbar----------------
  // ngOnInit(){
  //   let query= this.activeRoute.snapshot.paramMap.get('id');
  //   console.warn(query)
  //   query && this.product.SearchProduct(query).subscribe((result)=>{
  //     this.searchResult= result
  //     console.log(result);
  //     console.log('Search component exe.. ')
  //   })
  // }



  // submitSearch(val:string){
  //   console.log(val)
  //   // this.activeRoute.paramMap.get(`search/${val}`)
  // }


  
}

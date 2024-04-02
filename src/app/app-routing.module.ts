import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ParentComponent } from './component/parent/parent.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddtocartComponent } from './product/addtocart/addtocart.component';
import { SearchComponent } from './search/search.component';
// import { SigninComponent } from './auth/signin/signin.component';
// import { SignupComponent } from './auth/signup/signup.component';


const routes: Routes = [
  // default routing --
  {
    path:'home',component : HomeComponent
  },
  //   static routnig---
  {
    path:'about', component: AboutComponent
  },
  {
    path:'addtocart', component: AddtocartComponent
  },
  {
    path:'parent',component: ParentComponent
  },
  {
    path:'contact', component: ContactComponent
  },
  {
    path:'search/:query' , component : SearchComponent
  },
  //   module interface--
  // {
  //   path:'signin', component: SigninComponent
  // },
  // {
  //   path:'signup', component : SignupComponent
  // },



  // lazy loading-------------auth (signin, signup)
  {
    path:"auth", loadChildren:()=> import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "product", loadChildren:()=> import('./product/product.module').then(pm => pm.productModule)
  },
  // wild card routnig / page not found -- this define ate end
  {
    path:'**',  component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserapiService } from 'src/app/services/userapi.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  title= "sing in page"

  mobileNo:number= 1234456868
constructor(private userserv: UserapiService, private router: Router){}
login( userprofile:any, user:String, pass:String){
// alert('sing in! '+userprofile+" "+user+" " +pass)
this.userserv.profileLogin(userprofile).subscribe((data:any)=>{
data.forEach((i:any)=>{
  if(i.username.includes(user)){
    if(i.username == user){
    if(i.password == pass){
      localStorage.setItem('LoginUser',
      userprofile)
      alert("login success")
      this.router.navigate([""])
    }
    else{
      alert("invalid password")
    }
  }
    else{
      alert("invalid user")
    }
  }

})
})
}
}



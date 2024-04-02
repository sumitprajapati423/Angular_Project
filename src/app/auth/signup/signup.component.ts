import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  title="sign up page "

  moErr:any
  volidMo(mo:any){
    console.log(mo)
    if(mo.length> 10 || mo .length < 10 ){
      this.moErr = true
    }
    else{
      this.moErr = false
}
}

passErr:any
passvalid(pass:any){
console.log(pass)

if(pass.length <= 8){
if(pass.includes('@') || pass.includes('#')){
  this.passErr =false
}
else{
  this.passErr = true
}
}
else{
  this.passErr = true
}
}

formData:any = new Object();
submitFun(Name:any, Mail:string, Mo:any,  Address:string){
console.log(Name,Mail,  Mo, Address)
this.formData.Name = Name
this.formData.Email = Mail
this.formData.Mobile = Mo
this.formData.Address = Address
console.log(this.formData)
}

}

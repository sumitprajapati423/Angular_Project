import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  let profile = localStorage.getItem('LoginUser')
  if(profile == 'Admin'){
    return false
  }
  else{
    window.alert("accese denied!")
    return false;
  }

};

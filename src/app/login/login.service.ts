import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  valide:boolean=false;
  isAdmin:boolean=false;

  login(email:string,password:string){
      if(email==="admin@gmail.com" && password==="admin")
        {
          this.valide=true;
          this.isAdmin=true;
        }
      else if(email==="user@gmail.com" && password==="user")
        this.valide=true;

    return this.valide;
  }
}

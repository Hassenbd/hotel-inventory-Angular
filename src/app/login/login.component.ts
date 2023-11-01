import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

password:string='';
email:string='';

constructor(private route:Router , private service:LoginService){}

login()
{
  if(this.service.login(this.email,this.password))
    this.route.navigate(['/rooms','add']);
}

}

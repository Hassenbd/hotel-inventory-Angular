import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { LoginClassGuard } from './guards/login-class.guard';
import { LoadClasGuard } from './rooms/load-clas.guard';

const routes: Routes = [

  {path:'emp',component:EmployeeComponent, canActivate:[LoginClassGuard]},
  {path:'header',component:HeaderComponent},

  {path:'login',component:LoginComponent},

  {
    path:'rooms',
    loadChildren:()=> import('./rooms/rooms.module').then((m)=>m.RoomsModule),
    canActivate:[LoginClassGuard],
    canMatch:[LoadClasGuard]
  },

  {path:'',redirectTo:'/login', pathMatch:'full'},

  {
    path: 'booking/:roomid', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) ,
    canActivate:[LoginClassGuard]
  },

  { path: 'comments', loadChildren: () => import('./comment/comment.module').then(m => m.CommentModule) },

  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

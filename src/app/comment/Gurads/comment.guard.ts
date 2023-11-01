import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { comments } from '../comments';
import { CommentService } from '../comment.service';

@Injectable({
  providedIn: 'root'
})
export class CommentGuard implements Resolve<comments[]> {

  constructor(private service:CommentService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): comments[] | Observable<comments[]> | Promise<comments[]> {
      return this.service.getComments();
  }

}

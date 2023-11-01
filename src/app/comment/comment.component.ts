import { Component } from '@angular/core';
import { CommentService } from './comment.service';
import { ActivatedRoute } from '@angular/router';
import { comments } from './comments';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

  constructor(
    private service:CommentService,
    private activeRoute:ActivatedRoute
    ){}

  comments$=this.service.getComments();
  comments:comments[]=[]

  ngOnInit():void {
    this.activeRoute.data.subscribe((data)=>{
      this.comments=data['comments'];
    });
  }
}

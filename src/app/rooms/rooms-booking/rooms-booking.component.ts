import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit {

  constructor(private router:ActivatedRoute){}

  id:number=0;

  id$=this.router.paramMap.pipe(
    map((data)=>data.get('id')  )
  );

  ngOnInit():void{
    //this.router.params.subscribe((data)=>{this.id=data['id']} );
  }
}

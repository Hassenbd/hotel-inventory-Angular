import { Component, OnInit } from '@angular/core';
import { Rooms } from '../rooms/rooms';
import {NgForm} from '@angular/forms';
import { RoomsService } from '../rooms/service/rooms.service';

@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.scss']
})
export class RoomAddComponent {
  room: Rooms = {
    roomNumber: 0,
    price: 0,
    checkinTime: new Date(),
    rating: 0,
    amenities: '',
    roomType: '',
    photos: '',
    checkoutTime:new Date(),
  };

  constructor(private service: RoomsService){}



  successMsg:string='';

  addRoom(roomForm:NgForm)
  {
    this.service.addroom(this.room).subscribe((data)=>
      {
        this.successMsg="Room added successuflly";
        roomForm.reset();
      }
    )
  }

}

import { Component } from '@angular/core';
import { RoomsService } from '../rooms/service/rooms.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers:[RoomsService]
})
export class HeaderComponent {

  title:string="";
  constructor(private serviceRoom:RoomsService){

  }
}

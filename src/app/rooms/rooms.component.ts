import {
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Room, Room2, Rooms } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './service/rooms.service';
import { Subject, catchError, map, of } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements ViewChild, AfterViewInit, OnInit {
  descendants!: boolean;
  emitDistinctChangesOnly!: boolean;
  first!: boolean;
  read: any;
  isViewQuery!: boolean;
  selector: any;
  static?: boolean | undefined;

  @ViewChild(HeaderComponent, { static: false })
  headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) headerMulti!: QueryList<HeaderComponent>;

  constructor(private roomService: RoomsService) {}

  error$=new Subject<string>();
  getError$=this.error$.asObservable();


  priceFilter=new FormControl(1);

  countRooms$=this.roomService.getRooms$.pipe(
    map((rooms)=>rooms.length)
  )

  rooms2$=this.roomService.getRooms$.pipe(
    catchError((err)=>{

      this.error$.next(err.message);
      return of([]);
    })
  );

  ngOnInit(): void {
    console.log(this.headerComponent);

    //  this.roomService.getRooms$.subscribe(rooms =>{
    //   this.ros=rooms;
    //  })
  }

  nbRooms = 10;
  vis = false;
  title = 'titleA';
  e = 'one';

  rooms: Room = {
    name: 'hassen',
    available: 10,
  };

  ros:Rooms[]=[];

  addRoom() {
    const ro: Rooms = {
      roomNumber: 12,
      price: 500.76,
      checkinTime: new Date('11-Nov-2021'),
      rating: 1,
      amenities: 'BlaBlaBlaBla nonono',
      roomType: '',
      photos: '',
      checkoutTime:new Date('12-Nov-2021'),
    };
    //this.ros = [...this.ros, ro];

    this.roomService.addroom(ro).subscribe((rooms)=>{
      this.ros=rooms;
    });

  }


  edit(){
    const ro: Rooms = {
      roomNumber: 1,
      price: 500.555,
      checkinTime: new Date('11-Nov-2021'),
      rating: 1,
      amenities: 'BlaBlaBlaBla nonono',
      roomType: '',
      photos: '',
      checkoutTime:new Date('12-Nov-2021'),
    };
    this.roomService.editRoom(ro).subscribe((data)=>{
      this.ros=data;
    });
  }

  delete(){
    this.roomService.deleteRoom(4).subscribe((data)=>{
      this.ros=data;
    });
  }

  selected!: Rooms;

  change() {
    this.vis = !this.vis;
    this.title = 'titelB';
  }

  selectRooms(room: Rooms) {
    this.selected = room;
  }

  ngAfterViewInit() {
    // this.headerComponent.title = 'hello 1';
    // this.headerMulti.last.title = 'hello2';
  }
}

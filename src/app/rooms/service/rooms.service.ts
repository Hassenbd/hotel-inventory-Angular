import { Injectable } from '@angular/core';
import { Rooms } from '../rooms';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  getRooms$=this.http.get<Rooms[]>('/api/rooms').pipe(
    shareReplay(1)
  );

  constructor(private http:HttpClient) {
    console.log("Rooms services...")
   }
  //ros:Room2[] =[];

  getRooms(){
    return this.http.get<Rooms[]>('/api/room')  ;
  }

  addroom(room:Rooms){
    return this.http.post<Rooms[]>('/api/rooms',room);
  }

  editRoom(room:Rooms){
    return this.http.put<Rooms[]>(`/api/Rooms/${room.roomNumber}`,room);
  }

  deleteRoom(id:number){
    return this.http.delete<Rooms[]>(`/api/Rooms/${id}`);
  }
}

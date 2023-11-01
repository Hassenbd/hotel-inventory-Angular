import { Pipe, PipeTransform } from '@angular/core';
import { Rooms } from './rooms';

@Pipe({
  name: 'filterPrice'
})
export class FilterPricePipe implements PipeTransform {

  transform(rooms: Rooms[], price:number): Rooms[] {
    return rooms.filter((room)=>room.price>price);
  }

}

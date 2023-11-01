import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomAddComponent } from '../room-add/room-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { FilterPricePipe } from './filter-price.pipe';

@NgModule({
  declarations: [
    RoomsComponent,
    RoomListComponent,
    RoomsBookingComponent,
    RoomAddComponent,
    FilterPricePipe,
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    HeaderModule,
    ReactiveFormsModule,
  ],
})
export class RoomsModule {}

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Room2, Rooms } from '../rooms';
import { RoomsService } from '../service/rooms.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomListComponent implements OnChanges {
  @Input() rooms: Rooms[] | null = [];
  @Input() title: string = '';


  @Output() selectedRooms = new EventEmitter<Rooms>();

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes['title'])
      this.title = changes['title'].currentValue.toUpperCase();
  }

  selectRooms(room: Rooms) {
    this.selectedRooms.emit(room);
  }
}

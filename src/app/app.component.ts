import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tuto';

  // @ViewChild('user',{read:ViewContainerRef})vd!:ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const compRef=this.vd.createComponent(RoomsComponent);
  //   compRef.instance.nbRooms=50;
  // }


  // @ViewChild('name',{static:true})name!:ElementRef;

  // ngOnInit(): void {
  //   this.name.nativeElement.innerText="hotel";
  // }



}

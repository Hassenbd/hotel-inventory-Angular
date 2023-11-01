import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{

  @Input() color:string='red';

  constructor(private element :ElementRef) { }

  ngOnInit():void{
      this.element.nativeElement.style.backgroundColor=this.color;
  }

  @HostListener('mouseenter')onMouseEnter(){
    this.element.nativeElement.style.backgroundColor='white';
  }

  @HostListener('mouseleave')onMouseLeave(){
    this.element.nativeElement.style.backgroundColor='green';
  }

}

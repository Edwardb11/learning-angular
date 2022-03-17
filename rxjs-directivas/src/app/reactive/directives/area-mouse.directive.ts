import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[AreaMouse]',
})
export class MouseDirective implements OnInit {
  @Input()
  color = 'green';
  @Input()
  height = '200';
  constructor(private el: ElementRef<HTMLDivElement>) {}
  ngOnInit(): void {
    this.setBaground();
    this.setHeight();
  }
  setBaground() {
    this.el.nativeElement.style.backgroundColor = this.color;
  }
  setHeight() {
    this.el.nativeElement.style.height = `${this.height}px`;
    console.log('aa');
  }
}

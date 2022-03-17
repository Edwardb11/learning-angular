import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appBtn]',
})
export class BtnDirective implements OnInit {
  @Input()
  bgColor = 'red';

  @Input()
  textColor = 'snow';

  @Input()
  width = '100%';
  constructor(private el: ElementRef<HTMLDivElement>) {}

  ngOnInit(): void {
    this.setColor();
    this.setWidth();
  }
  setColor() {
    this.el.nativeElement.style.backgroundColor = this.bgColor;
    this.el.nativeElement.style.color = this.textColor;
    this.el.nativeElement.style.border = 'none';
  }
  setWidth() {
    this.el.nativeElement.style.width = `${this.width}`;
    this.el.nativeElement.style.padding = '.3rem';
  }
}

import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[DarkTheme]',
})
export class ThemeDirective implements OnInit {
  private htmlElement: ElementRef<HTMLDivElement>;
  constructor(private el: ElementRef<HTMLDivElement>) {
    this.htmlElement = el;
  }
  ngOnInit(): void {
    this.setBaground();
    this.setTextColor();
  }
  setBaground() {
    this.htmlElement.nativeElement.style.backgroundColor = '#333';
  }
  setTextColor() {
    this.htmlElement.nativeElement.style.color = 'snow';
  }
}

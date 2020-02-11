import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[only-numbers]'
})
export class OnlyNumbersDirective {
  element: any;
  constructor(
    private elementRef: ElementRef
  ) {
    this.element = this.elementRef.nativeElement;
  }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this.element.value;
    this.element.value = initalValue.replace(/[^0-9]*/g, '');
    if (initalValue !== this.element.value) {
      event.stopPropagation();
    }
  }
}

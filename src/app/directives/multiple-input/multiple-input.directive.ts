import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[multiple-input]'
})
export class MultipleInputDirective {

  element: any;
  @Input('multiple-input') limit: string;
  constructor(
    private elementRef: ElementRef
  ) {
    this.element = this.elementRef.nativeElement;
  }

  @HostListener('input', ['$event']) onInputChange(event) {
    console.log(event);
    const initalValue = this.element.value;
    switch (event.inputType) {
      case 'deleteContentBackward':
        const array = (this.element.value).replace('\t', '').split('');
        if (array[array.length - 1] !== '\t') {
          const lastString = (this.element.value).substring(0, (this.element.value).length - 1);
          this.element.value = this.createValue(lastString);
        }
        break;
      default:
        const noWordString = (this.element.value).replace(/[^0-9]*/g, '');
        this.element.value = this.createValue(noWordString);
        break;
    }
    if (initalValue !== this.element.value) {
      event.stopPropagation();
    }
  }

  createValue(value: string) {
    let newValue = '';
    let actualLimit = 1;
    for (const char of (value).replace('\t', '').split('')) {
      if (actualLimit === parseInt(this.limit, 10)) {
        newValue = newValue + char;
      } else if (char !== '\t') {
        newValue = newValue + `${char}\t`;
      }
      actualLimit++;
    }
    return newValue;
  }
}

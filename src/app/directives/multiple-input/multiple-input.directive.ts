import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[multiple-input]'
})
export class MultipleInputDirective {

  element: any;
  position: any;
  @Input('multiple-input') limit: string;
  constructor(
    private elementRef: ElementRef
  ) {
    this.element = this.elementRef.nativeElement;
  }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this.element.value;
    console.log('Event', event);
    console.log('Initial', initalValue);
    console.log('Initial', initalValue.split(''));
    switch (event.inputType) {
      case 'deleteContentBackward':
        this.element.value = this.createValue(this.deleteValue(initalValue));
        setTimeout(() => {
          event.target.setSelectionRange(0, 0);
        }, 1);
        break;
      default:
        const noWordString = this.element.value.replace(/[^0-9]*/g, '');
        this.element.value = this.createValue(noWordString);
        break;
    }
    console.log(this.elementRef);
    console.log(this.element.children);
    console.log('Final', this.element.value);
    console.log('Final', this.element.value.replace(/\t/g, ''));
    if (initalValue !== this.element.value) {
      event.stopPropagation();
    }
  }

  createValue(value: string) {
    let newValue = '';
    let actualLimit = 1;
    for (const char of value.replace(/\t/g, '').split('')) {
      if (actualLimit === parseInt(this.limit, 10) || actualLimit === value.replace(/\t/g, '').split('').length) {
        newValue = newValue + char;
      } else if (actualLimit < parseInt(this.limit, 10)) {
        newValue = newValue + char + '\t';
      }
      actualLimit++;
    }
    return newValue;
  }

  deleteValue(value: string) {
    let newValue = '';
    let actualLimit = 1;
    for (const char of value.split('\t')) {
      if (char.length > 1) {
        newValue = newValue + char.substring(1);
        this.position = actualLimit - 1;
      } else {
        newValue = newValue + char;
      }
      actualLimit++;
    }
    return newValue;
  }
}

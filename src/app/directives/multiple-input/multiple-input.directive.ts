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
    this.position = this.element.children[0].selectionStart;
    switch (event.inputType) {
      case 'deleteContentBackward':
        this.position = this.position - 1;
        this.element.value = this.createValue(this.deleteValue(initalValue, true));
        break;
      case 'deleteContentForward':
        this.element.value = this.createValue(this.deleteValue(initalValue, false));
        break;
      default:
        this.position = this.position + 1;
        const noWordString = this.element.value.replace(/[^0-9]*/g, '');
        this.element.value = this.createValue(noWordString);
        break;
    }
    (this.position < 0) ? (this.position = 0) : (this.position = this.position);
    setTimeout(() => {
      event.target.setSelectionRange(this.position, this.position);
    }, 1);
    if (initalValue !== this.element.value) {
      event.stopPropagation();
    }
  }

  createValue(value: string) {
    let newValue = '';
    let actualLimit = 1;
    for (const char of value.replace(/\t/g, '').split('')) {
      if (actualLimit === parseInt(this.limit, 10)) {
        newValue = newValue + char;
      } else if (actualLimit < parseInt(this.limit, 10)) {
        if (actualLimit === value.replace(/\t/g, '').split('').length) {
          newValue = newValue + char;
        } else {
          newValue = newValue + char + '\t';
        }
      }
      actualLimit++;
    }
    return newValue;
  }

  deleteValue(value: string, backward: boolean) {
    let newValue = '';
    let actualLimit = 1;
    for (const char of value.split('\t')) {
      if (char.length > 1) {
        if (backward) {
          newValue = newValue + char.substring(1);
        } else {
          newValue = newValue + char.substring(0, 1);
        }
      } else {
        newValue = newValue + char;
      }
      actualLimit++;
    }
    return newValue;
  }
}

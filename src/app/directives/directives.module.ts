import { NgModule } from '@angular/core';
import { OnlyNumbersDirective } from './only-numbers/only-numbers.directive';
import { MultipleInputDirective } from './multiple-input/multiple-input.directive';
@NgModule({
    declarations: [OnlyNumbersDirective, MultipleInputDirective],
    imports: [],
    exports: [OnlyNumbersDirective, MultipleInputDirective]
})
export class DirectivesModule { }

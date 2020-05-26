import { NgModule } from '@angular/core';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        LoadingSpinnerComponent,
        DropdownDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        LoadingSpinnerComponent,
        DropdownDirective
    ]
})
export class SharedModule {}
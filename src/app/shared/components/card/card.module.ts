import { cardComponent } from './card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [cardComponent], 
    exports: [cardComponent],
    imports: [CommonModule]
})
export class cardModule { }

import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-card',
    templateUrl: './card.component.html'
})
export class cardComponent { 
    @Input() title: string = '';
}

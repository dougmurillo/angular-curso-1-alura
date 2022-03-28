import { SearchComponent } from './search/search.component';
import { cardModule } from './../../shared/components/card/card.module';
import { PhotoModule } from './../photo/photo.module';
import { filterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { CommonModule } from '@angular/common';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        filterByDescription,
        SearchComponent 
    ],
    imports: [ 
        CommonModule,
        PhotoModule,
        cardModule,
        DarkenOnHoverModule
    ]
})
export class PhotoListModule {}
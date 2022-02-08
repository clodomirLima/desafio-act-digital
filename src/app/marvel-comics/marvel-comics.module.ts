import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ComicDetailComponent } from './marvel-comic-detail/marvel-comic-detail.component';
import { ComicListComponent } from './marvel-comic-list/marvel-comic-list.component';
import { ComicService } from './marvel-comics.service';

@NgModule({
  imports: [
    AppMaterialModule,
    SharedModule
  ],
  declarations: [
    ComicDetailComponent,
    ComicListComponent
  ],
  providers: [ComicService],
  exports: [ComicListComponent]
})
export class ComicsModule { }

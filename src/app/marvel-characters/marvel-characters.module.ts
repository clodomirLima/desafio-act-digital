import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../app-material.module';
import { ComicsModule } from '../marvel-comics/marvel-comics.module';
import { SharedModule } from '../shared/shared.module';
import { CharacterCardComponent } from './marvel-character-card/marvel-character-card.component';
import { CharacterListComponent } from './marvel-character-list/marvel-character-list.component';

@NgModule({
  imports: [
    AppMaterialModule,
    ComicsModule,
    SharedModule
  ],
  declarations: [
    CharacterCardComponent,
    CharacterListComponent
  ]
})
export class CharacterModule { }

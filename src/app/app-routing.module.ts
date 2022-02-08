import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharacterListComponent } from './marvel-characters/marvel-character-list/marvel-character-list.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

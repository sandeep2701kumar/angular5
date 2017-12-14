import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeroComponent} from './hero.component';


@NgModule({
  declarations: [
    HeroComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [ HeroComponent ]
})

export class HeroModule { }

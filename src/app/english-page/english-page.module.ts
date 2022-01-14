import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnglishRoutingModule } from './english.routing';


import { MainComponent } from './pages/main/main.component';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    EnglishRoutingModule
  ]
})
export class EnglishPageModule { }

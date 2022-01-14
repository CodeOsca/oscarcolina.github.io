import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpanishRoutingModule } from './spanish.routing';


import { MainComponent } from './pages/main/main.component';




@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    SpanishRoutingModule
  ]
})
export class SpanishPageModule { }

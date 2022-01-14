import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { StartComponent } from './sections/start/start.component';
import { ContactComponent } from './sections/contact/contact.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { MiWorksComponent } from './sections/mi-works/mi-works.component';


const COMPONENTS = [HeaderComponent,
    FooterComponent,
    AboutMeComponent,
    StartComponent,
    ContactComponent,
    SkillsComponent,
    MiWorksComponent]

@NgModule({
  declarations: [ ...COMPONENTS ],
  exports: COMPONENTS,
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

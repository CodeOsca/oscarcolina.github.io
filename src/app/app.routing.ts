import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path:'es',
    loadChildren: () => import('./spanish-page/spanish-page.module').then( m => m.SpanishPageModule ),
    pathMatch:'full'
  },

  { 
    path:'en',
    loadChildren: () => import('./english-page/english-page.module').then( m => m.EnglishPageModule )
  },

  {
    path:'**',
    redirectTo:'en'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../english-page/pages/main/main.component';

const routes: Routes = [
    {
        path:'',
        children:[
            { path:'', component: MainComponent, pathMatch:'full' },
            { path:'**', redirectTo:'' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SpanishRoutingModule {}

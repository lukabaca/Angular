import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TestComponentComponent} from './test-component/test-component.component';
import {PersonDetailsComponent} from './person-details/person-details.component';

const routes: Routes = [

    { path: 'people', component: TestComponentComponent },
    { path: 'detail/:id', component: PersonDetailsComponent },
    // tutaj default route, jak wejdziemy od razu na strone
     { path: '', redirectTo: '/people', pathMatch: 'full' },

];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],

})
export class AppRoutingModule { }



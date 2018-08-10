import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TestComponentComponent} from './test-component/test-component.component';
import {PersonDetailsComponent} from './person-details/person-details.component';
import {OtherComponent} from './other/other.component';

const routes: Routes = [

  // do danej sciezki popdinasz dany komponent
    { path: 'people', component: TestComponentComponent },
    { path: 'detail/:id', component: PersonDetailsComponent },
    { path: 'other', component: OtherComponent },
    // tutaj default route, jak wejdziemy od razu na strone
     { path: '', redirectTo: '/people', pathMatch: 'full' },

];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],

})
export class AppRoutingModule { }



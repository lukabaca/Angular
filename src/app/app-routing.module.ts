import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TestComponentComponent} from './test-component/test-component.component';

const routes: Routes = [

    { path: 'people', component: TestComponentComponent }

];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],

})
export class AppRoutingModule { }



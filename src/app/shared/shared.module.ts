import { NgModule } from '@angular/core';
import {HeaderComponent} from "./header/header.component"
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
    declarations: [HeaderComponent, BreadcrumbsComponent],
    imports: [],
    exports: [HeaderComponent,BreadcrumbsComponent],
})
export class SharedModule {}
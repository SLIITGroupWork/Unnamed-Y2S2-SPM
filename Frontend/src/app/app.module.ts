import {BrowserModule} from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from '../shared/shared.module';
import { InternReportComponent } from './intern-report/intern-report.component';
import { RouterModule } from '@angular/router';
import { Form5Component } from './form5/form5.component';

const routings: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '**',
        redirectTo: '/'
    }
])
@NgModule({
    declarations: [
        AppComponent,
        InternReportComponent,
        Form5Component
    ],
    imports: [
        routings,
        BrowserModule,
        SharedModule.forRoot()
    ],
    exports: [
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

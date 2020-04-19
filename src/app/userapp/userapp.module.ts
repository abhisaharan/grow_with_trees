import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule } from "@angular/forms";

import  { UserappRouting } from "./userapp.routing";


import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ExamplesComponent } from './examples.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        ReactiveFormsModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_KEY_HERE'
        }),
        UserappRouting,
    ],
    declarations: [
        LandingComponent,
        LoginComponent,
        ExamplesComponent,
        ProfileComponent,
        SignupComponent
    ],
    providers: [
    ],
    exports: [
        LandingComponent,
        LoginComponent,
        ExamplesComponent,
        ProfileComponent,
        SignupComponent
    ]
})
export class UserappModule { }

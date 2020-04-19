import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from "./landing/landing.component";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { SignupComponent } from "./signup/signup.component";
import { AuthGuard } from "./helpers";

export const routes: Routes =[
    { path: 'landing',     component: LandingComponent, canActivate: [AuthGuard] },
    { path: 'login',       component: LoginComponent },
    { path: 'profile',     component: ProfileComponent },
    { path: 'signup',     component: SignupComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)

    ],
    exports: [
        RouterModule
    ],
})
export class UserappRouting { }

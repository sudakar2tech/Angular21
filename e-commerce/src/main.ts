/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
//import { App } from './app/app';
import { Login } from './app/login/login';
//import { Registration } from './app/registration/registration';
//import { Calculator } from './app/calculator/calculator';
//import { Rating } from './app/rating/rating';
//import { Gridarray } from './app/gridarray/gridarray';
//import { Gridremovearray } from './app/gridremovearray/gridremovearray';
//import { Home } from './app/home/home';
//import { Dashboard } from './app/dashboard/dashboard';
bootstrapApplication(Login, appConfig).catch((err) => console.error(err));

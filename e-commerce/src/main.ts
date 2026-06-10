/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
//import { App } from './app/app';
//import { Login } from './app/login/login';
import { Registration } from './app/registration/registration';
//import { Calculator } from './app/calculator/calculator';

bootstrapApplication(Registration, appConfig).catch((err) => console.error(err));

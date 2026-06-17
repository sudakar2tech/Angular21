import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Address } from './address/address';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [

{
    path:"about", component:About
},
{
    path:"dashboard", component:Dashboard
},
{
    path:"contact",
    component:Contact, 
    children:[{path:"address/:name", component:Address}]
}

];

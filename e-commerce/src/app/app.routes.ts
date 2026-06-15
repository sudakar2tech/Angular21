import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Address } from './address/address';

export const routes: Routes = [

{
    path:"about", component:About
},
{
    path:"contact",
    component:Contact, 
    children:[{path:"address/:name", component:Address}]
}

];

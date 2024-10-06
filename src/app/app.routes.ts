import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignledishComponent } from './signledish/signledish.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent
    },
    {
        path: 'menu',
        component:MenuComponent,
    },

    {
        path:'menu/:pid',
        component:SignledishComponent,
    },  

    {
        path: 'book',
        component:BookingComponent,
    },
    {
        path: 'contact',
        component:ContactComponent,
    },
    {
        path:'signin',
        component:SignInComponent,
    },
    {
        path:'Register',
        component:RegisterComponent
    }
  
];

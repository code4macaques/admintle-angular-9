import { Routes, RouterModule } from '@angular/router';

// Components
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './login/register/register.component';
import { LoginComponent } from './login/login.component';
import { RecoverPasswordComponent } from './login/recover-password/recover-password.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'recover-password', component: RecoverPasswordComponent },
  { path: '**', component: PagenotfoundComponent, pathMatch: 'full' }
];


export const APP_ROUTES = RouterModule.forRoot(routes, { useHash: true });

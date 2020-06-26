import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Routes
import { APP_ROUTES } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';

// Modules
import { PagesModule } from './pages/pages.module';

// Pipes
import { PipesModule } from './pipes/pipes.module';
import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { RecoverPasswordComponent } from './login/recover-password/recover-password.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RecoverPasswordComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PagesModule,
    PipesModule,
    APP_ROUTES
  ],
  providers: [ CapitalizePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }

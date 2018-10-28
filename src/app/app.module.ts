import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// PrimeNg
import { AppRoutingModule } from './app-routing.module';
import { MenubarModule } from 'primeng/menubar';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

// App Components
import { AppComponent } from './app.component';
import { SiteSetupComponent } from './site-setup/site-setup.component';
import { SiteEditComponent } from './site-edit/site-edit.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './@services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SiteEditComponent,
    SiteSetupComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    HttpClientModule,
    InputTextModule,
    MenubarModule,
    PasswordModule,
    ReactiveFormsModule,
  ],
  providers: [ AuthService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BarrasupComponent } from './barrasup/barrasup.component';
import { AdminComponent } from './admin/admin.component';
import { TclienteComponent } from './tcliente/tcliente.component';
import { TeditorialComponent } from './teditorial/teditorial.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BarrasupComponent,
    AdminComponent,
    TclienteComponent,
    TeditorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

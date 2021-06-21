import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiciosService } from './servicios.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BarrasupComponent } from './barrasup/barrasup.component';
import { AdminComponent } from './admin/admin.component';
import { TclienteComponent } from './tcliente/tcliente.component';
import { TeditorialComponent } from './teditorial/teditorial.component';
import { LandingComponent } from './landing/landing.component';
import { BooksComponent } from './books/books.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CbooksComponent } from './cbooks/cbooks.component';
import { CompraComponent } from './compra/compra.component';
import { CrudbooksComponent } from './crudbooks/crudbooks.component';
import { EbooksComponent } from './ebooks/ebooks.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { EsolicitudComponent } from './esolicitud/esolicitud.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BarrasupComponent,
    AdminComponent,
    TclienteComponent,
    TeditorialComponent,
    LandingComponent,
    BooksComponent,
    CarritoComponent,
    CbooksComponent,
    CompraComponent,
    CrudbooksComponent,
    EbooksComponent,
    SolicitudComponent,
    EsolicitudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

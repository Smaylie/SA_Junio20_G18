import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent  } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { LandingComponent } from './landing/landing.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CompraComponent } from './compra/compra.component';
import { CrudbooksComponent } from './crudbooks/crudbooks.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registrarse', component: RegisterComponent },
  { path: 'administrador', component: AdminComponent },
  { path: 'landing-page', component: LandingComponent },
  { path: 'mi-carrito', component: CarritoComponent },
  { path: 'realizar-compra', component: CompraComponent },
  { path: 'administrar-tienda', component: CrudbooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

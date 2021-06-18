import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private servicio: ServiciosService, private router: Router) { }

  ngOnInit(): void {
    this.servicio.setLoged(false);
    this.selectedLogin = '1';
  }

  userLogin: any = {
    usuario: '',
    contra: '',
  }

  apiUser: any;

  selectedLogin: any;

  login() {
    let objetoLogin;

    if(this.selectedLogin == '1') {
      // login cliente
      this.servicio.loginCliente(this.userLogin)
        .subscribe((res) => {
          objetoLogin = res;
          console.log(res);
          if(objetoLogin.success == true) {
            // existe
            this.apiUser = objetoLogin.datos;
            if(this.apiUser.tipo == 1) {
              // cliente normal
              alert(`bienvenido ${ this.apiUser.nombres }! 😎`);
              this.apiUser.es = 1;
              this.servicio.setLoged(true);
              this.servicio.setLog(this.apiUser);
              this.router.navigateByUrl('/landing-page');
            } else {
              // admin
              alert(`bienvenido ${ this.apiUser.nombres }! 😎`);
              this.apiUser.es = 2;
              this.servicio.setLoged(true);
              this.servicio.setLog(this.apiUser);
              this.router.navigateByUrl('/administrador');
            }
          } else {
            // no existe
            alert('error de acceso! 😖');
          }
        }, (err) => {
          console.log(err);
        });
    } else {
      // login
      this.servicio.loginEditorial(this.userLogin)
        .subscribe((res) => {
          objetoLogin = res;
          if(objetoLogin.success == true) {
            this.apiUser = objetoLogin.datos;
            alert(`bienvenido ${ this.apiUser.nombre }! 😎`);
            this.apiUser.es = 3;
            this.servicio.setLoged(true);
            this.servicio.setLog(this.apiUser);
            this.router.navigateByUrl('/administrar-tienda');
          } else {
            alert('error de acceso! 😖');
          }
        }, (err) => {
          console.log(err);
        }); 
    }
  }

}

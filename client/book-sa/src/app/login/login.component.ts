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
    this.selectedGroup = '18';
  }

  userLogin: any = {
    usuario: '',
    contra: '',
  }

  apiUser: any = {
    idc: 0,
    nombres: '',
    apellidos: '',
    correo: '',
    password: '',
    telefono: '',
    estado: 0, 
    es: 0,
    tipo: 0,
  };

  user17: any;
  user19: any;

  selectedLogin: any;
  selectedGroup: any;

  login() {
    let objetoLogin;

    if(this.selectedGroup == "18") {
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
    } else if(this.selectedGroup == "17") {
      /*
        apellido: "apellido"
        celular: "12123411"
        contrasena: "1234"
        email: "email1"
        foto: ""
        id: 1
        nombre: "proveedor1"
        tipo_usuario: 0
      */
      let objeto17 = {
        email: this.userLogin.usuario,
        password: this.userLogin.contra
      }
      this.servicio.loginG17(objeto17)
        .subscribe((res) => {
          this.user17 = res;
          this.apiUser.idc = this.user17.id;
          this.apiUser.nombres = this.user17.nombre;
          this.apiUser.apellidos = this.user17.apellido;
          this.apiUser.correo = this.user17.email;
          this.apiUser.password = this.user17.contrasena;
          this.apiUser.telefono = this.user17.celular;
          this.apiUser.estado = 1;
          this.apiUser.es = 1;
          this.apiUser.tipo = 1;
          this.servicio.setLoged(true);
          this.servicio.setLog(this.apiUser);
          alert(`bienvenido ${ this.apiUser.nombres }! 😎`);
          this.router.navigateByUrl('/landing-page');
        });
    } else if(this.selectedGroup == "19") {
      /*
        direccion: "CIUDAD"
        id: 1
        password: "Abc123**"
        primer_apellido: "ADMINISTRADOR"
        primer_nombre: "USUARIO"
        rol: "ADMINISTRADOR"
        segundo_apellido: ""
        segundo_nombre: ""
        status: "ACTIVO"
        telefono: "12345678"
        username: "admin@admin.com"
        validado: true
      */
      let objeto19 = {
        user: this.userLogin.usuario,
        password: this.userLogin.contra
      }
      this.servicio.loginG19(objeto19)
        .subscribe((res) => {
          this.user19 = res;
          this.apiUser.idc = this.user19.id;
          this.apiUser.nombres = this.user19.primer_nombre;
          this.apiUser.apellidos = this.user19.primer_apellido;
          this.apiUser.correo = this.user19.username;
          this.apiUser.password = this.user19.password;
          this.apiUser.telefono = this.user19.telefono;
          this.apiUser.estado = 1;
          this.apiUser.es = 1;
          this.apiUser.tipo = 1;
          this.servicio.setLoged(true);
          this.servicio.setLog(this.apiUser);
          alert(`bienvenido ${ this.apiUser.nombres }! 😎`);
          this.router.navigateByUrl('/landing-page');
        });
    }
    
  }

  

}

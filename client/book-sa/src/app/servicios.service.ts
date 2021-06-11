import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient, private router: Router) { }

  postUsuario(usuario) {
    return this.http.post('http://localhost:3000/api/signup', usuario, httpOptions);
  }

  postEditorial(editorial) {
    return this.http.post('http://localhost:3010/api/editorial/insertar', editorial, httpOptions);
  }

  loginCliente(cliente) {
    return this.http.post('http://localhost:3000/api/login/cliente', cliente, httpOptions);
  }

  loginEditorial(editorial) {
    return this.http.post('http://localhost:3000/api/login/editorial', editorial, httpOptions);
  }

  getClientes() {
    return this.http.get('http://localhost:3000/api/users');
  }

  deleteClientes(idCliente) {
    return this.http.post('http://localhost:3000/api/users/eliminar/cliente', idCliente, httpOptions);
  }

  getEditoriales() {
    return this.http.get('http://localhost:3010/api/editorial/leer');
  }

  deleteEditorial(idEditorial) {
    return this.http.post('http://localhost:3000/api/users/eliminar/editorial', idEditorial, httpOptions);
  }

  aceptarEditorial(idEditorial) {
    return this.http.put('http://localhost:3010/api/editorial/actualizar', idEditorial, httpOptions);
  }
}

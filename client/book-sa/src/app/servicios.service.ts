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

  USUARIO_LOG: any;
  PRODUCTO_VER: any;
  CARRITO_LOG: any;
  LOGED: any;

  constructor(private http: HttpClient, private router: Router) { }

  setLoged(valor: boolean) {
    localStorage.setItem('loged', JSON.stringify(valor));
  }

  getLoged() {
    this.LOGED = JSON.parse(localStorage.getItem('loged'));
    return this.LOGED;
  }

  setCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  getCarrito() {
    this.CARRITO_LOG = JSON.parse(localStorage.getItem('carrito'));
    return this.CARRITO_LOG;
  }

  setLog(usuario) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  getLog() {
    this.USUARIO_LOG = JSON.parse(localStorage.getItem('usuario'));
    return this.USUARIO_LOG;
  }

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

  getLibros() {
    return this.http.get('http://localhost:9000/api/');
  }

  deleteLibros(idLibro) {
    return this.http.delete('http://localhost:9000/api/'+idLibro);
  }

  updateLibros(idlibro:number, libro:any) {
    return this.http.put('http://localhost:9000/api/'+idlibro, libro, httpOptions);
  }

  postLibro(libro: any) {
    return this.http.post('http://localhost:9000/api/', libro, httpOptions);
  }

  uploadImage(imagenSubida: File) {
    const formData = new FormData();
    formData.append('libroImage', imagenSubida);
    return this.http.post('http://localhost:9000/imagenlibro', formData);
  }

  postCarrito(objCarrito) {
    return this.http.post('http://localhost:3010/api/carrito/insertar', objCarrito, httpOptions);
  }

  getSCarrito(cliente: number) {
    return this.http.get('http://localhost:3010/api/carrito/leer/'+cliente);
  }

  deleteSCarrito(objEliminar: any) {
    return this.http.put('http://localhost:3010/api/carrito/actualizar', objEliminar, httpOptions);
  }

  getGeneros() {
    return this.http.get('http://localhost:3600/api/genero');
  }
}

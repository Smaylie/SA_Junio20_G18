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
    return this.http.post('http:/localhost:9000/imagenlibro', formData);
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

  getSolicitud() {
    return this.http.get('http://localhost:3015/api/solicitud/leer');
  }

  postSolicitud(solicitud: any) {
    return this.http.post('http://localhost:3015/api/solicitud/crear', solicitud, httpOptions);
  }

  updateSolicitud(idSolicitud: any) {
    return this.http.put('http://localhost:3015/api/solicitud/aceptar', idSolicitud, httpOptions)
  }

  uploadPdf(pdfSubida: File) {
    const formData = new FormData();
    formData.append('pdflibro', pdfSubida);
    return this.http.post('http://localhost:3015/pdflibro', formData);
  }

  postBitacora(bitacora: any) {
    return this.http.post('http://localhost:3015/api/bitacora/insertar', bitacora, httpOptions);
  }

  getBitacora() {
    return this.http.get('http://localhost:3015/api/bitacora/leerXadmin');
  }

  getOrdenes() {
    return this.http.get('http://localhost:3600/api/ordenes');
  }

  putOrdenes(id, orden) {
    return this.http.put('http://localhost:3600/api/ordenes/' + id, orden, httpOptions);
  }

  postOrdenes(orden) {
    return this.http.post('http://localhost:3600/api/ordenes', orden, httpOptions);
  }

  postCorreo(correo) {
    return this.http.post('http://localhost:9001/api/', correo, httpOptions);
  }

  loginG17(cuerpo) {
    return this.http.post('http://18.118.111.108:3636/api/users/login', cuerpo, httpOptions);
  }

  loginG19(cuerpo) {
    return this.http.post('http://35.209.160.141:5050/grupo19/usuario/login', cuerpo, httpOptions);
  }

  postClienteG17(cliente) {
    return this.http.post('http://18.118.111.108:3636/api/users/registro', cliente, httpOptions);
  }

  postClienteG19(cliente) {
    return this.http.post('http://35.209.160.141:5050/grupo19/user/register', cliente, httpOptions);
  }

  getLibrosG17() {
    return this.http.get('http://18.118.111.108:3636/api/products?limit=100');
  }

  getLibrosG19() {
    return this.http.get('http://35.209.160.141:5050/grupo19/librolist');
  }

  postLibroG17(libro) {
    return this.http.post('http://18.118.111.108:3636/api/prodproveedor/agregar', libro, httpOptions);
  }

  postLibroG19(libro) {
    return this.http.post('', libro, httpOptions);
  }

  postOrdenG17(orden) {
    return this.http.post('http://18.118.111.108:3636/api/orders/new', orden, httpOptions);
  }
}

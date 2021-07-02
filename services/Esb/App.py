"""
This script runs the application using a development server.
It contains the definition of routes and views for the application.

run: python App.py
"""

from flask import Flask, request
from flask_restful import Resource,Api
import requests,json

app = Flask(__name__)
api = Api(app)
api.representation('application/json')

"""
Redirecciones
"""

class EsbLogin(Resource):
    def post(self):
        direccion = 'http://157.230.218.35:3000/api/login/cliente'
        body = request.get_json()
        data = json.dumps({'usuario': body['usuario'] , 'contra':body['contra']})
        headers = {'content-type': 'application/json'}
        info = requests.post(direccion, data = data, headers = headers)
        return info.json()

class EsbRegistrarCliente(Resource):
    def post(self):
        direccion = 'http://157.230.218.35:3000/api/signup'
        body = request.get_json()
        data = json.dumps({'nombre': body['nombre'] , 'apellidos':body['apellidos'], 'correo': body['correo'] , 'password': body['password'] , 'telefono': body['telefono'], 'estado': body['estado'], 'tipo': body['tipo'] })
        headers = {'content-type': 'application/json'}
        info = requests.post(direccion, data = data, headers = headers)
        return info.json()

class EsbCrearLibroenEditorial(Resource):
    def post(self):
        direccion = 'http://157.230.218.35:9000/api/'
        body = request.get_json()
        data = json.dumps({'nombre': body['nombre'] , 'autor':body['autor'], 'precio': body['precio'] , 'cantidad': body['cantidad'] , 'estado': body['estado'], 'imagen': body['imagen'], 'editorial': body['editorial'], 'generos': body['generos'] })
        headers = {'content-type': 'application/json'}
        info = requests.post(direccion, data = data, headers = headers)
        return info.json()

class EsbObtenerLibrosdeEditorial(Resource):
    def get(self):
        direccion = 'http://157.230.218.35:9000/api/'
        info = requests.get(direccion)
        return info.json()

class EsbComprar(Resource):
    def post(self):
        direccion = 'http://157.230.218.35:3600/api/ordenes/'
        body = request.get_json()
        data = json.dumps({'id_usuario': body['id_usuario'] , 'fecha':body['fecha'] })
        headers = {'content-type': 'application/json'}
        info = requests.post(direccion, data = data, headers = headers)
        return info.json()

"""
Direcciones
"""

api.add_resource(EsbLogin, '/esb/usuario/login')
api.add_resource(EsbRegistrarCliente, '/esb/usuario/crear')
api.add_resource(EsbCrearLibroenEditorial, '/esb/editorial/crearLibro')
api.add_resource(EsbObtenerLibrosdeEditorial, '/esb/editorial/getLibros')
api.add_resource(EsbComprar, '/esb/cliente/comprar')

"""
Levantando el servidor
"""

if __name__ == '__main__':
    HOST = '0.0.0.0'
    PORT = 3500
    app.run(debug=True, host=HOST, port=PORT)
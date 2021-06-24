const expect = require('chai').expect
const request = require('supertest')('http://localhost:4010/api/editorial')
process.env.NODE_ENV = 'test'
const app = require('./index')
const assert = require('assert');

describe('GET /leer', function () {
    it('Debe retornar status 200', async function () {
        const response = await request
            .get('/leer')

        expect(response.status).to.be.eql(200);
    })

    it('Debe retornar una array', async function () {
        const response = await request
            .get('/leer')

        const attributes = response.body;
        expect(attributes).to.be.an('array');
    })

    it('La primera editorial debe contener los atributos ide, nombre, correo', async function () {
        const response = await request
            .get('/leer')

        const attributes = response.body[0];
        expect(attributes).to.include.keys('ide', 'nombre', 'correo');
    })

    it('El campo direccion de la primera editorial debe ser un string', async function () {
        const response = await request
            .get('/leer')

        const attributes = response.body[0];
        expect(attributes.direccion).to.be.an('string');
    })

    //--------malas-----------------

    it('tipo de request incorrecto, debe retornar status 404', async function () {
        const response = await request
            .post('/leer')

        expect(response.status).to.be.eql(404);
    })



    //INTEGRACIÖN
    it('Debe retornar status 200, si la la DB y el servicio estan integrados', async function () {
        const response = await request
            .get('/leer')

        expect(response.status).to.be.eql(200);
    })
    it('Si la integración del servicio y la DB no esta correcta retorna 404', async function () {
        const response = await request
            .post('/leer')

        expect(response.status).to.be.eql(404);
    })
    it('Se debe de recibir un string para la lectura del campo nombre, si la conexión a la db es correcta', async function () {
        const response = await request
            .get('/leer')

        const attributes = response.body[0];
        expect(attributes.nombre).to.be.an('string');
    })
    it('Se debe de recibir un string para la lectura del campo correo, si la conexión a la db es correcta', async function () {
        const response = await request
            .get('/leer')

        const attributes = response.body[0];
        expect(attributes.correo).to.be.an('string');
    })
    it('Se debe de recibir un string para la lectura del campo password, si la conexión a la db es correcta', async function () {
        const response = await request
            .get('/leer')

        const attributes = response.body[0];
        expect(attributes.password).to.be.an('string');
    })
    it('Se debe de recibir un string para la lectura del campo direccion, si la conexión a la db es correcta', async function () {
        const response = await request
            .get('/leer')

        const attributes = response.body[0];
        expect(attributes.direccion).to.be.an('string');
    })
    it('El servicio de editorial en la solicitud a la db debe regresar un array para que la integracion este correcta', async function () {
        const response = await request
            .get('/leer')

        const attributes = response.body;
        expect(attributes).to.be.an('array');
    })
    it('Todas las editoriales deben de retornar los campos de identificador, nombre y un correo', async function () {
        const response = await request
            .get('/leer')

        const attributes = response.body[0];
        expect(attributes).to.include.keys('ide', 'nombre', 'correo');
    })

})

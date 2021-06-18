const expect = require('chai').expect;
const request = require('supertest')('http://localhost:3600/api');
process.env.NODE_ENV = 'test';
const app = require('./index');

describe('Generos', () => {
    it('Debe existir editoriales', async function () {
        const response = await request.get('/genero');

        expect(response.body).to.be.an('array');
    });

    it('Debe devolver solo un objeto', async function () {
        const response = await request.get('/genero/1');

        expect(response.body).not.to.be.an('array');
    });
});

describe('Detalle Libro-Genero', () => {
    it('Arreglo de detalles', async function () {
        const response = await request.get('/clasificacion');
        const cuerpo = response.body;
        
        if(cuerpo.lenght > 0) {
            //console.log('Existen datos en la tabla');
            expect(cuerpo[0]).to.be.an('array');
        } else {
            //console.log('Sin datos en la tabla');
            expect(cuerpo).to.be.an('array');
        }
    });
});
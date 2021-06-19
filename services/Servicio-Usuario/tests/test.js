//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../bin/www');
let should = chai.should();

//iniciamos con el test
chai.use(chaiHttp);

describe('Servicio de Usuarios', () => {
  /*
  * Test the /POST route
  */
  describe('/GET Lista usuarios', () => {
      it('Deberia regresar los valores sin problemas', (done) => {
        chai.request(server)
            .get('/api/users')
            .set('Content-Type', 'application/json')
            .set('Accept', 'text/html')
            .end((err, res) => {
                res.should.be.json;
              done();
            });
      });
  });
});
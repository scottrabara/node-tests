const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;

it('should return hello world http response', (done) => {
    request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
            expect(res.body).toInclude({
                error: 'Page not found.'
            });
        })
        .end(done);
});
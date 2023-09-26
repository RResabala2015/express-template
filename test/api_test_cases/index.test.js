/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/app');

describe('App', function () {
  it('Has the default page', function (done) {
    request(app)
      .get('/')
      .expect(/Welcome to Express/, done);
  });
});

describe('GET /', () => {
  test('Should return a successful response', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});

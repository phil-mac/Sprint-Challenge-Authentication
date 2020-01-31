const request = require('supertest');

const server = require('./server.js');

const login = "login route";
const loginRoute = '/api/login';

describe('server.js', () => {
  describe(loginRoute, () => {
    it(`endpoint returns OK status code from the ${login}`, async () => {
      const expectedStatusCode = 200;

      const response = await request(server).get(loginRoute);

      expect(response.status).toEqual(expectedStatusCode);
    });

    it(`endpoint returns a JSON object from the ${login}`, async () => {
      const expectedBody = { api: 'running' };

      const response = await request(server).get(loginRoute);

      expect(response.body).toEqual(expectedBody);
    });

    it(`endpoint returns a JSON object from the ${login}`, async () => {
      const response = await request(server).get(loginRoute);

      expect(response.type).toEqual('application/json');
    });
  });
});

const register = "register route";
const registerRoute = '/api/register';

describe('server.js', () => {
  describe(registerRoute, () => {
    it(`endpoint returns OK status code from the ${register}`, async () => {
      const expectedStatusCode = 200;

      const response = await request(server).get(registerRoute);

      expect(response.status).toEqual(expectedStatusCode);
    });

    it(`endpoint returns a JSON object from the ${register}`, async () => {
      const expectedBody = { api: 'running' };

      const response = await request(server).get(registerRoute);

      expect(response.body).toEqual(expectedBody);
    });

    it(`endpoint returns a JSON object from the ${register}`, async () => {
      const response = await request(server).get(registerRoute);

      expect(response.type).toEqual('application/json');
    });
  });
});
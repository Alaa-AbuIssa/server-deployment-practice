xtest('adds 6 + 4 to equal 10', () => {
  expect(6 + 4).toBe(10);
});

('use strict');
const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);

describe('API Server', () => {
  it('handles the invalid requests', async () => {
    const response = await request.get('/else');
    expect(response.status).toEqual(404);
  });
  it('handles the errors', async () => {
    const response = await request.get('/error');
    expect(response.status).toEqual(500);
  });
  it('handles correct routes', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
  });
});
const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/friends/1 should return ross', async () => {
    const results = await request(app).get('/friends/1');
    const expected = { id: '1', name: 'Ross', status: 'Alive' };
    expect(results.body).toEqual(expected);
  });
  afterAll(() => {
    pool.end();
  });
});

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
  it('/friends should return the whole gang of friends', async () => {
    const results = await request(app).get('/friends');
    const expected = [
      { id: '1', name: 'Ross', status: 'Alive' },
      { id: '2', name: 'Phoebe', status: 'Alive' },
      { id: '3', name: 'Rachel', status: 'Alive' },
      { id: '4', name: 'Monica', status: 'Alive' },
      { id: '5', name: 'Chandler', status: 'Alive' },
      { id: '6', name: 'Joey', status: 'Alive' },
    ];
    expect(results.body).toEqual(expected);
  });
  afterAll(() => {
    pool.end();
  });
});

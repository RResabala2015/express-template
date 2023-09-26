/* eslint-disable no-undef */
const supertest = require('supertest');
const app = require('../../src/app');
const request = supertest(app);

const mongoose = require('../../src/config/mongoDB');
let originalLog; let consoleOutput;

describe('Mongoose connection test', () => {
  test('Waiting for a connection to the MongoDB before running the test cases', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });

  test('It should successfully connect to mongo server', (done) => {
    expect(mongoose.connection).toBeDefined();
    done();
  });
  beforeAll(async () => {
    originalLog = console.log;
    consoleOutput = [];
    console.log = (...args) => {
      consoleOutput.push(...args);
    };
  });

  afterAll(async () => {
    console.log = originalLog;
    await mongoose.connection.close();
  });
  it('Should log "Mongoose is connected."', async () => {
    mongoose.connection.emit('connected');
    expect(consoleOutput).toContain('Mongoose is connected.');
  });

  it('Should log "Mongoose connection is disconnected."', async () => {
    mongoose.connection.emit('disconnected');
    expect(consoleOutput).toContain('Mongoose connection is disconnected.');
  });

  it('Should log "Mongoose is connected."', async () => {
    mongoose.connection.emit('error', new Error('Connection Error'));
    expect(consoleOutput).toContain('Connection Error');
  });
});

'use strict';

const { app } = require('../../lib/server.js');
const supergoose = require('../supergoose.js');
const mockRequest = supergoose(app);

describe('web server', () => {

  it('should respond properly on request to /categories', () => {

    return mockRequest
      .get('/categories')
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.count).toBe(0);
      }).catch(console.error);

  });

  it('should respond properly on post to /categories', () => {

    return mockRequest
      .post('/categories')
      .send({ name: 'Test', description: 'test stuff' })
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.name).toBe('Test');
      }).catch(console.error);

  });

  it('should add new data to the database', ()=>{
    
  });

});

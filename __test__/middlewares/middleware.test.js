'use strict';

const { app } = require('../../lib/server.js');
const supergoose = require('../supergoose.js');
const mockRequest = supergoose(app);
const logger = require('../../middlewares/logger');
const timeStamp = require('../../middlewares/timeStamp');
const isValid = require('../../middlewares/isValid');

describe('Middleware', () => {

  let errorObject = 'Invalid User ID/Password';

  it('logs a message', () => {
    //console.log(`LOGGING: PATH: ${request.path}, METHOD:${request.method}, REQUEST TIME: ${request.requestTime}`);
    let req = {
      path: 'test/path',
      method: 'GET',
      requestTime: '12:00',
    };
    let res = {};
    let next = () => {return 1;};
    logger(req, res, next);
    expect(req.message).toEqual(`this is the message for ${req.method}`)

  });

  it('adds a timeStamp', () => {
    //console.log(`LOGGING: PATH: ${request.path}, METHOD:${request.method}, REQUEST TIME: ${request.requestTime}`);
    let req = {
      path: 'test/path',
      method: 'GET',
    };
    let res = {};
    let next = () => {return 1;};
    timeStamp(req, res, next);
    expect(req.requestTime).toBeTruthy();

  });

  it('adds an isValid property', () => {
    //console.log(`LOGGING: PATH: ${request.path}, METHOD:${request.method}, REQUEST TIME: ${request.requestTime}`);
    let req = {
      path: 'test/path',
      method: 'GET',
    };
    let res = {};
    let next = () => {return 1;};
    isValid(req, res, next);
    expect(req.valid).toEqual(expect.anything());

  });

});

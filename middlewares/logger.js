'use strict';

/**
* adds a message to a request body and logs out path, method and requestTime of the request  body
* @param req
* @param res
* @param next
*/

module.exports = (request, response, next)=>{
  request.message = `this is the message for ${request.method}`;
  console.log(`LOGGING: PATH: ${request.path}, METHOD:${request.method}, REQUEST TIME: ${request.requestTime}`);
  next();
};

//module.exports = logger;

'use strict';

/**
* adds a boolean to a request body to validate the request
* @param req
* @param res
* @param next
*/

const isValid = (request,response,next)=>{
  let randomNum = Math.floor(Math.random() * Math.floor(2));
  request.valid = false;
  if(randomNum){
    request.valid = true;
  }
  next();
};

module.exports = isValid;

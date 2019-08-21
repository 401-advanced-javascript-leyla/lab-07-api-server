'use strict';

/**
* checks if there are errors
* @param error
* @param req
* @param res
* @param next
*/

const errorHandler = (error, request, response,next)=>{
  if(error === 404){
    response.send(error,'PAGE NOT FOUND');
  }else if(error === 500){
    response.send(error,'INTERNAL SERVER ERROR');
  }
  next();
};

module.exports = errorHandler;


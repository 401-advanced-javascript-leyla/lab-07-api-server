'use strict';


/**
* adds a time stamp to a request body
* @param req
* @param res
* @param next
*/
const timeStamp =(request, response,next)=>{
  request.requestTime = Date.now();
  next();
};
module.exports = timeStamp;

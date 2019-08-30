'use strict';

const express = require('express');

const timeStamp = require('../middlewares/timeStamp');
const errorHandler = require('../middlewares/error-handler');
const isValid = require('../middlewares/isValid');

//get the route
const categoriesRoute = require('../route/category-routes');

const app = express();

//middleware application
app.use(express.json());
app.use(timeStamp);
app.use(errorHandler);
app.use(isValid);

//route application
app.use(categoriesRoute);

app.use('/docs', express.static('./docs'));

module.exports = {
  app,
  /**
 * start the app
 * @param
 * @returns {string}
 */

  start:()=>{
    app.listen(process.env.PORT, () => console.log(`Listening on 3000`));
  },
};

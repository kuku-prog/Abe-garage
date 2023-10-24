import express from 'express';
const indexRoutes = express.Router();
import installRout from './install.routes.js';
import employeeRout from './employee.routes.js';

     
indexRoutes .use(installRout);
indexRoutes .use(employeeRout);

export default indexRoutes ;

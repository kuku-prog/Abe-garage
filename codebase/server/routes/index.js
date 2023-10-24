import express from 'express';
const indexRoutes = express.Router();
import installRout from './install.routes.js';
import employeeRout from './employee.routes.js';

     
routes.use(installRout);
routes.use(employeeRout);

export default routes;

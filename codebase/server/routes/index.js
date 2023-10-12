import express from 'express';
const routes = express.Router();
import installRout from './install.routes.js';
// import loginRout from './login.routes.js';
//import orderRout from './order.routes.js';
// import customerRout from './customer.routes.js';
// import employeeRout from './employee.routes.js';
// import serviceRout from './service.routes.js';
// import vehicleRout from './vehicle.routes.js';
     
routes.use(installRout);
// routes.use(loginRout);
// routes.use(loginRout);
// routes.use(loginRout);
// routes.use(loginRout);
// routes.use(loginRout);
// routes.use(loginRout);
export default routes;

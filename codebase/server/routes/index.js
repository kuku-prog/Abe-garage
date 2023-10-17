import express from 'express';
const indexRoutes = express.Router();
import installRout from './install.routes.js';
// import loginRout from './login.routes.js';
// import orderRout from './order.routes.js';
// import customerRout from './customer.routes.js';
// import employeeRout from './employee.routes.js';
// import serviceRout from './service.routes.js';
// import vehicleRout from './vehicle.routes.js';
     
indexRoutes.use(installRout);
// indexRoutes.use(loginRout);
// indexRoutes.use(orderRout);
// indexRoutes.use(customerRout);
// indexRoutes.use(employeeRout);
// indexRoutes.use(serviceRout);
// indexRoutes.use(vehicleRout);
export default indexRoutes;

import express from 'express';
const routes = express.Router();
import installRout from './install.routes.js';
routes.use(installRout);
export default routes;

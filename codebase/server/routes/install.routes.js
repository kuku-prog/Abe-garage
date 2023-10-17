import installController from '../controllers/install.controller.js';
import express from 'express';
const installRout = express.Router();
installRout.get('/install', installController.install);

export default installRout;
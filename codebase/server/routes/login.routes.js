import loginController from '../controllers/login.controller.js';
import express from 'express';
const loginRout = express.Router();
loginRout.get('/install', installController.install);

export default installRout;
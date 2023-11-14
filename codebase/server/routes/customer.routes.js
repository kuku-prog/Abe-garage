import customerController from '../controllers/customer.controller.js';
import express from 'express';
const customerRoute = express.Router();
customerRoute.post('/add-customer', customerController.addcustomer);
// customerRoute.get('/all-customer', customerController.allcustomer);
// customerRoute.get('/single-customer', customerController.singlecustomer);
// customerRoute.update('/update-single-customer', customerController.updatesinglecustomer);
// customerRoute.delete('/delete-single-customer', customerController.deletesinglecustomer);




export default customerRoute;
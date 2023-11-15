import  customerService from '../services/customer.service.js'
import bcrypt from "bcrypt";

const  customerController ={
   addcustomer: async(req,res,next)=>{
		// console.log(req.body);
      const {
			customer_email,
			customer_first_name,
			customer_last_name,
			customer_phone,
		} = req.body;
		// check all fields are sent
		if (
			!customer_email ||
			!customer_first_name ||
			!customer_last_name ||
			!customer_phone 
		) {
			return res.status(500).json({
				success: "false",
				message: "All fields are required",
			});
		}
      //check the imail is used befor
      customerService.getCustomerByEmail(customer_email, (err, results) => {
			if (err) {
				console.log(err);
				return res.status(500).json({
					success: "false",
					message: "Database connection error during email checking",
				});
			} 
			else {
				if (results.length) {
					return res.status(500).json({
						success: "false",
						message: "The email is already used",
					});
            }
        
         }});

	
			// prepare customer hash
			const salt = bcrypt.genSaltSync(10);
			req.body.customer_hash = bcrypt.hashSync(
				customer_email,
				salt
			);
			
			customerService.addTocustomer_identifier(
				req.body,
				(err, results) => {
					if (err) {
						return res.status(500).json({
							success: "false",
							message:
								"Database connection error during registering customer adding",
						});
					} 
					else {
						//active_customer_status,  customer_id
						req.body.customer_id = results.insertId;
						req.body.active_customer_status = 1;
						customerService.addTocustomer_ifo(
							req.body,
							(err, results3) => {
								if (err) {
									return res.status(500).json({
										success: "false",
										message:
											"Database connection error during registering customer adding",
									});
								} 
								else {
								console.log(results3);
									return res.status(200).json({
										success: "true",
										message: "customer registered successfully",
									});
								}
							}	);

						
					}
				}	);
			

			






   },

}


export default customerController;
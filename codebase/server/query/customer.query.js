export default {
	getCustomerByEmailQuery: `SELECT * FROM customer_identifier WHERE customer_email = ? ; `,
	addCustomer_identifierTableQuery: `INSERT INTO customer_identifier (customer_email, customer_phone_number,customer_added_date, customer_hash)
   VALUES (?, ?,now(), ?);
   `,
	addcustomer_infoTableQuery: `INSERT INTO customer_info (customer_id, customer_first_name, customer_last_name, active_customer_status)
   VALUES (?, ?, ?, ?);
   `,
	updateCustomer_infoTableQuery: ` UPDATE customer_info SET customer_first_name = ?, customer_last_name = ?, active_customer_status = ?
    WHERE customer_id = ?;
    `,
	updateCustomer_phoneQuery: `UPDATE customer_identifier SET customer_phone_number = ?
WHERE customer_id = ?;`,
	selectCustomerByid: `SELECT * FROM customer_identifier WHERE customer_id = ? ; `,
};

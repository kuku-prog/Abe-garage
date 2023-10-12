export const qery = [
  `CREATE TABLE IF NOT EXISTScustomer_identifie (
customer_i int(11) NOT NULL AUTO_INCREMENT,
customer_emai varchar(255) NOT NULL,
customer_phone_numbe varchar(255) NOT NULL,
customer_added_dat DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
customer_has varchar(255) NOT NULL,
  PRIMARY KEY (customer_id),
  UNIQUE (customer_email)
) ENGINE=InnoDB;
`,
  `CREATE TABLE IF NOT EXISTScustomer_inf (
customer_info_i int(11) NOT NULL AUTO_INCREMENT,
customer_i int(11) NOT NULL, 
customer_first_nam varchar(255) NOT NULL,
customer_last_nam varchar(255) NOT NULL,
active_customer_statu int(11) NOT NULL,
  PRIMARY KEY (customer_info_id),
  FOREIGN KEY (customer_id) REFERENCES customer_identifier(customer_id)
) ENGINE=InnoDB;
`,
  `CREATE TABLE IF NOT EXISTScustomer_vehicle_inf (
vehicle_i int(11) NOT NULL AUTO_INCREMENT,
customer_i int(11) NOT NULL, 
vehicle_yea int(11) NOT NULL,
vehicle_mak varchar(255) NOT NULL,
vehicle_mode varchar(255) NOT NULL,
vehicle_typ varchar(255) NOT NULL,
vehicle_mileag int(11) NOT NULL, 
vehicle_ta varchar(255) NOT NULL,
vehicle_seria varchar(255) NOT NULL,
vehicle_colo varchar(255) NOT NULL,
  PRIMARY KEY (vehicle_id),
  FOREIGN KEY (customer_id) REFERENCES customer_identifier(customer_id)
) ENGINE=InnoDB;
`,
  `CREATE TABLE IF NOT EXISTScompany_role (
company_role_i int(11) NOT NULL AUTO_INCREMENT,
company_role_nam varchar(255) NOT NULL,
  PRIMARY KEY (company_role_id),
  UNIQUE (company_role_name)
) ENGINE=InnoDB;
`,
  `CREATE TABLE IF NOT EXISTScommon_service (
service_i int(11) NOT NULL AUTO_INCREMENT,
service_nam varchar(255) NOT NULL,
service_descriptio TEXT,
  PRIMARY KEY (service_id)
) ENGINE=InnoDB;



`,
  `CREATE TABLE IF NOT EXISTSemploye (
employee_i int(11) NOT NULL AUTO_INCREMENT,
employee_emai varchar(255) NOT NULL,
active_employe int(11) NOT NULL,
added_dat DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (employee_id), 
  UNIQUE (employee_email)
) ENGINE=InnoDB;

`
  ,
  `CREATE TABLE IF NOT EXISTSemployee_inf (
employee_info_i int(11) NOT NULL AUTO_INCREMENT,
employee_i int(11) NOT NULL,
employee_first_nam varchar(255) NOT NULL,
employee_last_nam varchar(255) NOT NULL,
employee_phon varchar(255) NOT NULL,
  PRIMARY KEY (employee_info_id),
  FOREIGN KEY (employee_id) REFERENCES employee(employee_id)
) ENGINE=InnoDB;
`,
  `CREATE TABLE IF NOT EXISTSemployee_pas (
employee_pass_i int(11) NOT NULL AUTO_INCREMENT,
employee_i int(11) NOT NULL,
employee_password_hashe varchar(255) NOT NULL,
  PRIMARY KEY (employee_pass_id),
  FOREIGN KEY (employee_id) REFERENCES employee(employee_id)
) ENGINE=InnoDB;`,

  `CREATE TABLE IF NOT EXISTSemployee_rol (
employee_role_i int(11) NOT NULL AUTO_INCREMENT,
employee_i int(11) NOT NULL,
company_role_i int(11) NOT NULL,
  PRIMARY KEY (employee_role_id),
  FOREIGN KEY (employee_id) REFERENCES employee(employee_id),
  FOREIGN KEY (company_role_id) REFERENCES company_roles(company_role_id)
) ENGINE=InnoDB;

`,
  `CREATE TABLE IF NOT EXISTSorder (
order_i int(11) NOT NULL AUTO_INCREMENT,
employee_i int(11) NOT NULL,
customer_i int(11) NOT NULL,
vehicle_i int(11) NOT NULL,
order_dat DATETIME DEFAULT CURRENT_TIMESTAMP,
active_orde int(11) NOT NULL,
order_has varchar(255) NOT NULL,
  PRIMARY KEY (order_id),
  FOREIGN KEY (employee_id) REFERENCES employee(employee_id), 
  FOREIGN KEY (customer_id) REFERENCES customer_identifier(customer_id),
  FOREIGN KEY (vehicle_id) REFERENCES customer_vehicle_info(vehicle_id)
) ENGINE=InnoDB;
`,
  `CREATE TABLE IF NOT EXISTSorder_inf (
order_info_i int(11) NOT NULL AUTO_INCREMENT,
order_i int(11) NOT NULL,
order_total_pric int(11) NOT NULL,
estimated_completion_dat DATETIME DEFAULT CURRENT_TIMESTAMP,
completion_dat DATETIME,
additional_reques TEXT,
notes_for_internal_us TEXT,
notes_for_custome TEXT,
additional_requests_complete int(11) NOT NULL,
  PRIMARY KEY (order_info_id),
  FOREIGN KEY (order_id) REFERENCES orders(order_id)
) ENGINE=InnoDB;
`,
  `CREATE TABLE IF NOT EXISTSorder_service (
order_service_i int(11) NOT NULL AUTO_INCREMENT,
order_i int(11) NOT NULL,
service_i int(11) NOT NULL,
service_complete int(11) NOT NULL,
  PRIMARY KEY (order_service_id),
  FOREIGN KEY (order_id) REFERENCES orders(order_id),
  FOREIGN KEY (service_id) REFERENCES common_services(service_id)
) ENGINE=InnoDB;
`,
  `CREATE TABLE IF NOT EXISTSorder_statu (
order_status_i int(11) NOT NULL AUTO_INCREMENT,
order_i int(11) NOT NULL,
order_statu int(11) NOT NULL,
  PRIMARY KEY (order_status_id),
  FOREIGN KEY (order_id) REFERENCES orders(order_id)
) ENGINE=InnoDB;`];
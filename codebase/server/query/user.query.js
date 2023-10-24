
export default {
    getUserByEmailQuery: `select * from employee where employee_email=? `,
    employeeTableInsertQuery: `INSERT INTO employee (employee_email, active_employee, added_date) VALUES (?,?,now());`,
    employeeInfoTableInsertQuery: `INSERT INTO employee_info (employee_id, employee_first_name, employee_last_name, employee_phone) VALUES (?,?,?,?);`,
    employeePasswordTableInsertQuery: `INSERT INTO employee_pass (employee_id, employee_password_hashed) VALUES (?, ?);`
}
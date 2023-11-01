
function validateForm(form) {
  let isValid = true;
  const errors = {};

  // Validate employee email
  if (!form.employee_email || !form.employee_email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
    errors.employee_email = 'Invalid employee email';
    isValid = false;
  }

  // Validate employee first name
  if (!form.employee_first_name || !form.employee_first_name.match(/^[a-zA-Z]+$/)) {
    errors.employee_first_name = 'Invalid employee first name';
    isValid = false;
  }

  // Validate employee last name
  if (!form.employee_last_name || !form.employee_last_name.match(/^[a-zA-Z]+$/)) {
    errors.employee_last_name = 'Invalid employee last name';
    isValid = false;
  }

  // Validate employee phone
  if (!form.employee_phone) {
    errors.employee_phone = 'Employee phone is required';
    isValid = false;
  }

  // Validate user role
  if (!form.userRole) {
    errors.userRole = 'User role is required';
    isValid = false;
  }

  // Validate employee password
  if (!form.employee_password) {
    errors.employee_password = 'Employee password is required';
    isValid = false;
  }

  return { isValid, errors };
}

export default validateForm;
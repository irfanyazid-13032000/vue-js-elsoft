// SignupValidations.js
export function validateUsername(username) {
  let errorUsername = '';

  if (username.length === 0) {
    errorUsername = 'Username harus diisi';
  }
  
  return errorUsername;
}

export function validatePassword(password) {
  let errorPassword = '';

  if (password.length === 0) {
    errorPassword = 'Password harus diisi';
  }
  
  return errorPassword;
}

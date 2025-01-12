export const checkValidData = (Email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    Email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return '* Email is not a valid email';
  if (!isPasswordValid)
    return '* Password should be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number';

  if (name === null || name === '') return '* Name should not be empty';
  return null;
};

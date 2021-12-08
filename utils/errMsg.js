const length = (name, numb) => {
  switch (name) {
    case 'password':
      return { message: `"${name}" length must be ${numb} characters long` };
    default:
      return { message: `"${name}" length must be at least ${numb} characters long` };
  }
};

module.exports = {
  required: (name) => (
    { message: `"${name}" is required` }
  ),
  length,
  notFound: (name) => ({ message: `${name} not found` }),
  empty: (name) => ({ message: `"${name}" is not allowed to be empty` }),
  invalidEmail: { message: '"email" must be a valid email' },
  existingEmail: { message: 'User already registered' },
  invalidFields: { message: 'Invalid fields' },
  nonexistent: { message: 'User does not exist' },
};
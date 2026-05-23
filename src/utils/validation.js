export const validateRegister = ({ name, email, password, confirm }) => {
  const errors = {};
  if (!name || name.trim().length < 2) errors.name = 'Name must be at least 2 characters';
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email address';
  if (!password || password.length < 6) errors.password = 'Password must be at least 6 characters';
  if (password !== confirm) errors.confirm = 'Passwords do not match';
  return errors;
};

export const validateLogin = ({ email, password }) => {
  const errors = {};
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email address';
  if (!password) errors.password = 'Password is required';
  return errors;
};

export const validateTask = ({ title, description }) => {
  const errors = {};
  if (!title || title.trim().length < 2) errors.title = 'Title must be at least 2 characters';
  if (!description || description.trim().length < 5) errors.description = 'Description must be at least 5 characters';
  return errors;
};

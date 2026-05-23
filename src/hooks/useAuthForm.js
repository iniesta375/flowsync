import { useState } from 'react';
import { validateLogin, validateRegister } from '../utils/validation';

export function useAuthForm(mode = 'login') {
  const empty = mode === 'login'
    ? { email: '', password: '' }
    : { name: '', email: '', password: '', confirm: '' };

  const [fields, setFields] = useState(empty);
  const [errors, setErrors] = useState({});

  const set = (key, val) => {
    setFields((f) => ({ ...f, [key]: val }));
    setErrors((e) => ({ ...e, [key]: '' }));
  };

  const validate = () => {
    const errs = mode === 'login' ? validateLogin(fields) : validateRegister(fields);
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const reset = () => { setFields(empty); setErrors({}); };

  return { fields, set, errors, validate, reset };
}

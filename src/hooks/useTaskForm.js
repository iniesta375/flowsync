import { useState } from 'react';
import { validateTask } from '../utils/validation';

const EMPTY = { title: '', description: '', priority: 'medium' };

export function useTaskForm(initial = EMPTY) {
  const [fields, setFields] = useState(initial);
  const [errors, setErrors] = useState({});

  const set = (key, val) => {
    setFields((f) => ({ ...f, [key]: val }));
    setErrors((e) => ({ ...e, [key]: '' }));
  };

  const validate = () => {
    const errs = validateTask(fields);
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const reset = () => { setFields(EMPTY); setErrors({}); };

  return { fields, set, errors, validate, reset, setFields };
}

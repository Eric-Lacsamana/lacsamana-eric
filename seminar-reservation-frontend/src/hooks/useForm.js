import { useState } from 'react';


function setNestedValue(obj, path, value) {
  const keys = path.split('.');
  let current = obj;

  keys.forEach((key, index) => {
    if (index === keys.length - 1) {
      current[key] = value;
    } else {
      if (!current[key]) {
        current[key] = {}; 
      }
      current = current[key];
    }
  });

  return obj;
}

export function useForm(initialValues) {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => setNestedValue({ ...prevData }, name, value));
  };

  const handleSubmit = (e, onSubmit) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return {
    formData,
    setInitialData: setFormData,
    handleChange,
    handleSubmit,
  };
}

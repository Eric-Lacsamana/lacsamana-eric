import { useState } from 'react';

export function useForm(initialValues) {
  const [formData, setFormData] = useState(initialValues);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e, onSubmit) => {
    e.preventDefault();
    setLoading(true);
    onSubmit(formData);
  };

  return {
    formData,
    setInitialData: setFormData,
    handleChange,
    handleSubmit,
    isLoading,
    setError,
    error,
  };
}

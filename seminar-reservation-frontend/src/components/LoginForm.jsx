import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../hooks/useForm';

export default function LoginForm({ onSubmit }) {

  const { formData, handleChange, handleSubmit } = useForm({
    email: '',
    password: '',
  });

  return (
    <form id="login-form" onSubmit={(e)=> handleSubmit(e, onSubmit)}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input input-bordered w-full px-4 py-2 rounded-lg"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-lg font-semibold mb-2">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="input input-bordered w-full px-4 py-2 rounded-lg"
          required
        />
      </div>
    </form>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

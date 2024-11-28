import React, { useState } from 'react'

const FormExample = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type='text' value={name} onChange={(e)=> setName(e.target.value)} />
        </label>
        <br />
        <labe>
            Email:
            <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
        </labe>
        <br />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default FormExample;

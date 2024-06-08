import React, { useState } from 'react';
import axios from 'axios';

const StudentRegistrationForm = () => {
  const initialState = {
    name: '',
    reg: ''
  };

  const [formData, setFormData] = useState(initialState);

  const { name, reg } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/writetodatabase', formData);
      alert(res.data.message);
      setFormData(initialState); // Reset form after successful submission
    } catch (err) {
      console.error('Server error', err);
      alert('Server error while saving data');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={onChange} required />
      </div>
      <div>
        <label>Reg no:</label>
        <input type="text" name="reg" value={reg} onChange={onChange} required />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default StudentRegistrationForm;
import React, { useState } from 'react';

const BlotterForm = ({ onAddBlotter }) => {
  const [formData, setFormData] = useState({
    complainant: '',
    respondent: '',
    details: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBlotter(formData);
    setFormData({ complainant: '', respondent: '', details: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Complainant:</label>
      <input
        type="text"
        name="complainant"
        value={formData.complainant}
        onChange={handleChange}
        required
      />

      <label>Respondent:</label>
      <input
        type="text"
        name="respondent"
        value={formData.respondent}
        onChange={handleChange}
        required
      />

      <label>Details:</label>
      <textarea
        name="details"
        value={formData.details}
        onChange={handleChange}
        required
      />

      <label>Date:</label>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <button type="submit">Add Blotter</button>
    </form>
  );
};

export default BlotterForm;

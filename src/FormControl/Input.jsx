// Create a new file, e.g., FormField.js
import React from 'react';

const FormField = ({ label, name, type, value, onChange }) => (
  <div className="mb-3">
    <label className="form-label">{label}:</label>
    <input
      type={type || 'text'}
      className="form-control"
      name={name}
      onChange={onChange}
      value={value}
    />
  </div>
);

export default FormField;

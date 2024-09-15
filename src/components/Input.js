import React from 'react';

const Input = ({ label, type = 'text', value, onChange, name }) => {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input 
        type={type} 
        value={value} 
        onChange={onChange} 
        name={name} 
      />
    </div>
  );
};

export default Input;

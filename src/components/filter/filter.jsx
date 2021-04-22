import React, { useState } from 'react';

import './filter.css';

function Filter({ title, options, onChange }) {
  const [selectValue, setSelectValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setSelectValue(value);
    onChange(value);
  };

  return (
    <label className="filter__label" htmlFor="filter__select">
      <span className="filter__title">{title}</span>
      <select
        className="filter__select"
        value={selectValue}
        onChange={handleChange}
      >
        {Object.entries(options).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Filter;

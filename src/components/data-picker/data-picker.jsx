import React, { useState } from 'react';

import { getDate } from '../../utils';

function DataPicker({ onChangeDate }) {
  const [date, setDate] = useState(getDate());

  const onChange = ({ target: { value } }) => {
    setDate(value);
    onChangeDate(value);
  };

  return (
    <label className="filter__label" htmlFor="data-piker">
      <span className="filter__title">Date:</span>
      <input
        type="date"
        id="data-piker"
        name="trip-start"
        defaultValue={date}
        min="2017-01-01"
        onChange={onChange}
        className="filter__select"
      />
    </label>
  );
}

export default DataPicker;

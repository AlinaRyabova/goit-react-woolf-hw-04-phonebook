import React from 'react';
import style from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={style.filterLabel}>
    Find contacts by name
    <input
      className={style.filterInput}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);
export default Filter;

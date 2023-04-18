import React from 'react';
import PropTypes from 'prop-types';

import css from '../ContactForm/ContactForm.module.css';
const Filter = props => {
  const { value, onChange } = props;

  return (
    <div className={css.filter}>
      <label className={css.label}>Find contacts by name</label>
      <input
        type="text"
        name="query"
        placeholder="search by name"
        className={css['form-input']}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Filter;

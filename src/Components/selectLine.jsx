import React from 'react';
import LineField from './lineField';


export default function SelectLine(props) {
  const { name, label, options, required, error, onChange, value } = props;

  return (
    <LineField label={label}>
      <select
        value={value}
        required={required}
        onChange={(event) => onChange(name, event)}
        className={error ? 'inputError' : undefined }
      >
        {options.map((option, key) => (
          <option
            key={key}
            value={option.value}
            disabled={option.value === ''}
          >{option.label}</option>)
        )}
      </select>
    </LineField>
  );
}
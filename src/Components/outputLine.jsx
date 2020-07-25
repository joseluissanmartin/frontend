import React from 'react';
import LineField from './lineField';


export default function OutputLine(props) {
  const { label, value } = props;

  return (
    <LineField label={label}>
      <output> {value}</output>
    </LineField>
  );
}

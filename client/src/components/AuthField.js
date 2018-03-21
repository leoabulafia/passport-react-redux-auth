import React from 'react';
import TextField from 'material-ui/TextField';
import { FormHelperText, FormControl } from 'material-ui/Form';

export default ({
  setMultiline,
  setFocus,
  input,
  formFieldsType,
  label,
  meta: { error, touched }
}) => {
  const helperText = () => {
    if (touched && error) {
      return (
        <FormControl style={{ left: '5%', width: '90%' }} error>
          <FormHelperText>{error}</FormHelperText>
        </FormControl>
      );
    }
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%'
      }}
    >
      <TextField
        autoFocus={setFocus}
        multiline={setMultiline}
        id="name"
        type={formFieldsType}
        label={label}
        margin="normal"
        style={{ left: '5%', width: '90%' }}
        {...input}
      />
      {helperText()}
    </div>
  );
};

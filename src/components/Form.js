import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function FormPropsTextFields(props) {
  return (
    <Stack spacing={2} direction='row'>
      <p>n:</p>
      <TextField
        id='outlined-number'
        label='Number'
        type='number'
        style={{ width: 130 }}
        InputLabelProps={{
          shrink: true,
        }}
        {...props}
      />
    </Stack>
  );
}

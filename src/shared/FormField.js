import React from 'react';

import TextField from '@material-ui/core/TextField';


const FormTextField = ({ input, label, meta: { touched, error }, ...custom },) =>{
    return(
        <TextField
            label={label}
            floatingLabelText={label}
            errorText={touched && error}
            fullWidth
            margin="normal"
            size="small"
            variant= "outlined"
            {...input}
            {...custom}
        />
    );
}

export default FormTextField;


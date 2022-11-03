import React from 'react';
import { Button, Grid } from '@mui/material';
import FormMuiTextField from './form-mui-textfield';
import { useForm } from 'react-hook-form';
// Define the types of the form elements
interface IFormInput {
    firstName: string;
    lastName: string;
    password: string;
}

const defaultValues = {
    firstName: '',
    lastName: '',
    password: '',
}

const ReactHookMaterialUIForm = () => {
    const methods = useForm<IFormInput>({ defaultValues: defaultValues });
    const { handleSubmit, reset, control, setValue, watch } = methods;
    const onSubmit = (data: IFormInput) => console.log(data);

    return (
        <Grid container>
            <Grid container item xs={6} margin={1}>
                <FormMuiTextField name='firstName' control={control} label='First Name' />
            </Grid>

            <Grid container item  xs={6} margin={1}>
            <FormMuiTextField name='lastName' control={control} label='Last Name' />
            </Grid>

            <Grid container item  xs={6} margin={1}>
            <FormMuiTextField name='password' control={control} label='Password' textFieldProps={ {type: 'password'} } />
            </Grid>

            <Grid container item margin={1} xs={12}>
                <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
                    {" "}
                    Submit{" "}
                </Button>
                <Button onClick={() => reset()} variant={"outlined"}>
                    {" "}
                    Reset{" "}
                </Button>
            </Grid>
        </Grid>
    )
}

export default ReactHookMaterialUIForm;
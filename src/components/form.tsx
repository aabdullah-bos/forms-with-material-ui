import React, { useState  }from 'react';
import { Button, Grid, TextField } from '@mui/material';

const BasicMaterialUIForm = () => {
    const [fistName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onSubmitHandler = () => {
        console.log(`firstName: ${fistName}`);
        console.log(`lastName: ${lastName}`);
        console.log(`password: ${password}`);
    }
    
    const onResetHandler = () => {
        console.log('Resetting Form');
        setFirstName('');
        setLastName('')
        setPassword('');
    }

    return (
        <Grid container>
            <Grid container item margin={1}>
                <TextField
                    name='firstName'
                    label='First Name'
                    value={fistName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </Grid>
            <Grid container item margin={1}>
                <TextField
                    name='lastName'
                    label='Last Name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </Grid>
            <Grid container item margin={1}>
                <TextField
                    name='password'
                    label='Password'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Grid>
            <Grid item margin={1}>
                <Button variant='outlined' onClick={onSubmitHandler}>Submit</Button>
                <Button onClick={onResetHandler}>Reset</Button>
            </Grid>
        </Grid>
    )
}

export default BasicMaterialUIForm;
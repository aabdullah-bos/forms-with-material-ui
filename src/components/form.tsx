import React, { useState  }from 'react';
import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Slider,
    TextField,
    Radio,
    RadioGroup
} from '@mui/material';

const defaultValues = {
    firstName: '',
    lastName: '',
    password: '',
    favoriteNumber: 0,
    gender: '',
}

const BasicMaterialUIForm = () => {
    const [ formValues, setFormValues ] = useState(defaultValues);

    const onResetHandler = () => {
        setFormValues(defaultValues);
    }

    const onSubmitHandler = (event: any) => {
        event.preventDefault();
        console.log(formValues);
      };

      const handleSliderChange = (name: string) => (e: any, value: any) => {
        setFormValues({
          ...formValues,
          [name]: value,
        });
      };

    const onInputChangeHandler = (e: any) => {
        const { name, value } = e.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
      };

    return (
        <form onSubmit={onSubmitHandler}>
            <Grid container>
                <Grid container item margin={1}>
                    <TextField
                        name='firstName'
                        label='First Name'
                        value={formValues.firstName}
                        onChange={onInputChangeHandler}
                    />
                </Grid>

                <Grid container item margin={1}>
                    <TextField
                        name='lastName'
                        label='Last Name'
                        value={formValues.lastName}
                        onChange={onInputChangeHandler}
                    />
                </Grid>

                <Grid container item margin={1}>
                    <TextField
                        name='password'
                        label='Password'
                        type='password'
                        value={formValues.password}
                        onChange={onInputChangeHandler}
                    />
                </Grid>

                <Grid container item margin={1}>
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup
                            name="gender"
                            value={formValues.gender}
                            onChange={onInputChangeHandler}
                            row
                        >
                        <FormControlLabel
                            key="male"
                            value="male"
                            control={<Radio size="small" />}
                            label="Male"
                        />
                        <FormControlLabel
                            key="female"
                            value="female"
                            control={<Radio size="small" />}
                            label="Female"
                        />
                        <FormControlLabel
                            key="other"
                            value="other"
                            control={<Radio size="small" />}
                            label="Other"
                        />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid container item margin={1} xs={4}>
                    <Slider
                        value={formValues.favoriteNumber}
                        onChange={handleSliderChange("favoriteNumber")}
                        defaultValue={1}
                        step={1}
                        min={1}
                        max={3}
                        marks={[
                            {
                            value: 1,
                            label: "1",
                            },
                            {
                            value: 2,
                            label: "2",
                            },
                            {
                            value: 3,
                            label: "3",
                            },
                        ]}
                        valueLabelDisplay="off"
                    />
                </Grid>

                <Grid container item margin={1} xs={12}>
                    <Button variant='outlined' onClick={onSubmitHandler}>Submit</Button>
                    <Button onClick={onResetHandler}>Reset</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default BasicMaterialUIForm;
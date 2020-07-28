import React from 'react';
import { Paper, Grid, Typography, makeStyles, Button, Avatar } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';


import profile from '../assets/images/avatar1.jpg';
import FormTextField from '../shared/FormField';


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '15px',
    },


}));


const EditField = () =>{
    const classes = useStyles();    
    
    return (
        <div>
            <Paper className={classes.paper}>
                <div>
                    <Grid container direction="column">
                        <Header />
                        <ProfilePhoto />
                        <FormDetails />
                    </Grid>
                </div>
            </Paper>
        </div>
    );
}

export default EditField;

const Header = () =>{
    return (
        <div>
            <Grid container>
                <Grid item xs={10}>
                    <Typography variant="h5">Edit Personal Details</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Button color = "primary" variant="outlined">Tips</Button>
                </Grid>

            </Grid>
        </div>
    )
};


const ProfilePhoto = () =>{
    return (
        <div>
        <Grid container align="center">
            <Grid item xs={12}>
                <Typography align="left" variant="subtitle1">Photo</Typography>
            </Grid>
            <Grid item xs={12} >
                <Avatar alt="Upload your Picture" src={profile} />
            </Grid>
            <Grid item xs={12}>
                <Button>Add Photo</Button>
            </Grid>
        </Grid>
        
        </div>
    )
}


const FormDetails = () =>{
    return (
        <div >
            <Grid container>
                <Grid item xs={12}>
                    <Field 
                        component={FormTextField} 
                        required 
                        name="Full name" 
                        label = "Full name" 
                        placeholder="Enter your title, first and last name" 
                        autoComplete="name"
                        id="name"
                        autoFocus
                    />
                </Grid> 

                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Field 
                            component={FormTextField} 
                            name="email" 
                            label = "Display email" 
                            placeholder="Diplayed on resume" 
                            autoComplete="email"
                            id="email"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Field 
                            component={FormTextField}  
                            name="phone" 
                            label = "Phone" 
                            placeholder="Enter phone number" 
                            autoComplete="phone"
                            id="phone"
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <Field 
                        component={FormTextField}  
                        name="street" 
                        label = "Street" 
                        placeholder="Enter Street" 
                        autoComplete="street"
                        id="street"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Field 
                        component={FormTextField}  
                        name="postal" 
                        label = "Postal code" 
                        placeholder="Enter postal code" 
                        id="postal"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Field 
                            component={FormTextField}  
                            name="city" 
                            label = "City" 
                            placeholder="Enter postal code" 
                            id="postal"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Field 
                            component={FormTextField}  
                            name="country" 
                            label = "country" 
                            placeholder="Enter postal Country" 
                            id="country"
                        />
                    </Grid>
                </Grid>
                    <Grid item xs={12}>
                        <Field 
                        component={FormTextField}  
                        name="jobTitle" 
                        label = "Job Title" 
                        placeholder="enter your Job title" 
                        id="jobTitle"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Field 
                            component={FormTextField}  
                            name="jobTitle" 
                            label = "Date of Birth" 
                            placeholder="enter your Job title" 
                            id="jobTitle"
                        />
                    </Grid>
                </Grid>
        </div>
    );
}

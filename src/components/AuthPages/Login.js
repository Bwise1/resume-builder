import React from 'react';
import {Container, CssBaseline, makeStyles, Avatar, Grid, Link, Typography, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Field, reduxForm } from 'redux-form';
import FormTextField from '../../shared/FormField'


const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
    },
    avatar: {
        margin: theme.spacing(2),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
      }
}));
const Login = () =>{
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper} >
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component = "h1" variant = "h5">
                    Sign in
                </Typography>
                <form className={classes.form}>
                    <Field 
                        component={FormTextField} 
                        variant= "outlined" 
                        required 
                        fullWidth 
                        margin="normal"
                        name="email" 
                        label = "Email address" 
                        placeholder="example@email.com" 
                        autoComplete="email"
                        id="email"
                        autoFocus
                    />

                    <Field 
                        component={FormTextField} 
                        variant= "outlined" 
                        required 
                        fullWidth 
                        margin="normal"
                        name="password" 
                        label = "password" 
                        type = "password"
                        id="password"
                        autoComplete="current-password"
                    />
            
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid> 
                </form>
            </div>
        </Container>
    ); 
}

export default reduxForm({
    form: 'Login'
})(Login);
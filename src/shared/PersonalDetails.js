import React from 'react';
import { Paper, Typography, Grid, Button, makeStyles } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import CreateIcon from '@material-ui/icons/Create';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 'auto'
    },

    image: {
        height: 80,
        width: 80
    }
}));

const PersonalDetails = () =>{
    const classes = useStyles();    
    return (
        <>
            <Paper elevation={4} square className={classes.root}> 
                <div>
                        <Grid container  justify="center" direction="row"
                        alignItems="center">
                            <Grid item  xs={1}>
                                <FaceIcon />
                            </Grid>
                            <Grid item  xs={8}>
                                <Typography align="left" variant="h6">Personal Details</Typography>
                            </Grid >
                            <Grid item  xs={3} >
                                <Button variant="outlined" align="right" color="primary"> <CreateIcon /> Edit </Button>
                            </Grid>
                        </Grid>

                        <Grid container  justify="center" direction="column">
                            <Grid  container direction="row">
                                <Grid item  xs={4}>
                                    <PersonIcon className= {classes.image} />
                                </Grid >
                                <Grid item  xs={6}>
                                    <Typography>Oguntoye Benjamin Mayowa</Typography>
                                </Grid >
                            </Grid>
                            <Grid  container direction="row">
                                <Grid item  xs={4}>
                                    <Typography>Email</Typography>
                                </Grid >
                                <Grid item  xs={6}>
                                    <Typography>oguntoyebenjamin2@gmail.com</Typography>
                                </Grid >
                            </Grid>
                            <Grid  container direction="row">
                                <Grid item  xs={4}>
                                    <Typography>Address</Typography>
                                </Grid >
                                <Grid item  xs={6}>
                                    <Typography>block f, flat 1 m.f.a Quaters</Typography>
                                </Grid >
                            </Grid>
                            
                        </Grid>
                   
                </div>
            </Paper>

            <Button color="primary" variant="contained">+ ADD Content</Button>
        </>
    );
}

export default PersonalDetails;
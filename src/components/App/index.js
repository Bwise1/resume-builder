import React from 'react';
import { AppBar, Toolbar, makeStyles, CssBaseline, Grid } from '@material-ui/core';
import { reduxForm } from 'redux-form';

import Menu from './Menu';
import SideBar from './SideBar';
import FormInput from './artboard/FormInput';
import Preview from './artboard/Preview';
import EditField from '../../shared/EditField'





const useStyles = makeStyles((theme) => ({
    MenuItems:{
        display: 'flex',
        flex: 1,
    },
    mdMenu: {
        [theme.breakpoints.up("md")]: {
            display: 'none'
        },
    },
    lsMenu: {
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        },
    },
    content: {
        paddingLeft: 0,
        height: "auto",
        width: '100%',
        [theme.breakpoints.up("md")]: {
            paddingLeft: '130px',
        },
    }, 
    item: {
        padding: 30,
        marginTop: '60px'
    }
  }));

const Content = () => {
    const classes = useStyles();
    return(
        <div>
            {/*div class for top NavBar menu that only shows on Medium Screens*/}
            <div className={classes.mdMenu}>
                <AppBar color="default" position="static">
                    <Toolbar>
                        <div className={classes.MenuItems}>
                           <Menu />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>  
             {/*div class for SideBar Nav menu that only shows on Large Screens */}
            <div className={classes.lsMenu}>
                <SideBar /> 
            </div>
            <CssBaseline />
            <div className={classes.content}>
                <Grid container justify="center" >
                    <Grid className={classes.item} item xs={12} md={6} >
                        <FormInput /> 
                    </Grid>
                    <Grid className={classes.item} item xs={12} md={6} >
                        <EditField />
                    </Grid>
                </Grid>
            </div>
            
        </div>    
    );
}

export default reduxForm({
    form: 'Content'
})(Content);
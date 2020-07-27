import React from 'react';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import Menu from './Menu';
import SideBar from './SideBar';
import { reduxForm } from 'redux-form';



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
    }
  }));

const Content = () => {
    const classes = useStyles();
    return(
        <div>
            {/*div class for top NavBar menu that only shows on Medium Screens*/}
            <div className={classes.mdMenu}>
                <AppBar color="default">
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

             {/*div class for Form Items (Card)*/}
            <div>
            
            </div>

             {/*div class for preview */}
            <div>
            </div>
        </div>
        
    );
}

export default reduxForm({
    form: 'Content'
})(Content);
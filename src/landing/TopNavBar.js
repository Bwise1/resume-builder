import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const TopNavBar = ()=>{
    return(
        <React.Fragment>
            <AppBar color="default">
                <Toolbar>
                    <Typography variant ="h5"> Resume</Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default TopNavBar;
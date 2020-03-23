//import React from 'react'
//import Appbar from '@material-ui/core/AppBar'
/*import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
//import AppBar from  'material-ui/AppBar';

const Navbar = () => {
    return(
        <div>
          <Appbar title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more">
              <Toolbar>
                  <Typography variant="title" color="inherit">
                      <center>Welcome to Login Page</center>
                  </Typography>
              </Toolbar>
          </Appbar>

        </div>
        

    )
}
export default Navbar;*/

import React from 'react';
import AppBar from 'material-ui/AppBar';


const Navbar = () => (
  <AppBar
    title="LOGIN HERE"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);

export default Navbar;

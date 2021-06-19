import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Navbar = () => {
  return (
    <AppBar style={{ background: '#90caf9' }}>
      <Toolbar>
        <h2>doctored up</h2>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

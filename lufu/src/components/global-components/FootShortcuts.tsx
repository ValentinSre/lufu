import React from 'react';
import { AppBar, Toolbar } from '@mui/material';

const FooterShortcuts = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#f69fbe' }}>
      <Toolbar>
        <div style={{ flexGrow: 1, textAlign: 'center', padding: '5px' }}>
          <i>Parce que je t'aime, tout simplement. ❤️</i>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default FooterShortcuts;

import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () => (
  <AppBar position="sticky" sx={{ 
    height:'40px', 
    justifyContent:'center', 
    background: 'linear-gradient(90deg, #000000  30%, #B71C1C 100%)'
  }}>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Filan Fisteku
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;

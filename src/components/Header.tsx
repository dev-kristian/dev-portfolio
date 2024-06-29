import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-scroll';

const Header: React.FC = () => (
  <AppBar position="sticky" sx={{ 
    height:'40px', 
    justifyContent:'center', 
    background: 'linear-gradient(90deg, #000000  30%, #B71C1C 100%)'
  }}>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Kristian 
      </Typography>
      <Link to="skills" smooth={true} duration={500}>Skills</Link>
      <Link to="projects" smooth={true} duration={500}>Projects</Link>
    </Toolbar>
  </AppBar>
);

export default Header;

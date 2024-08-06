import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact Me" },
  ];

  return (
    <AppBar position="sticky" sx={{
      height: { xs: 'auto', sm: '40px' },
      justifyContent: 'center',
      background: 'linear-gradient(90deg, #000000 30%, #B71C1C 100%)'
    }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          Kristian's Portfolio
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {menuItems.map((item) => (
                <MenuItem key={item.to} onClick={handleClose}>
                  <Link to={item.to} smooth={true} duration={500}>
                    {item.label}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <div>
            {menuItems.map((item) => (
              <Link key={item.to} to={item.to} smooth={true} duration={500}>
                <Typography
                  variant="body1"
                  sx={{ color: '#ffffff', cursor: 'pointer', display: 'inline', mx: 2 }}
                >
                  {item.label}
                </Typography>
              </Link>
            ))}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
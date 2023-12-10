import React, { useState } from 'react';
import { AppBar, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const CustomAppBar: React.FC = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    handleMenuClose();
  };

  const handleLogoClick = () => {
    // Rediriger vers la page d'accueil
    navigate('/');
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#f69fbe' }}>
      <Toolbar>
        <IconButton edge="start" aria-label="menu" style={{ color: '#8b1123' }} onClick={handleMenuClick}>
          <MenuIcon />
        </IconButton>

        {/* Logo */}
        <div style={{ flexGrow: 1, textAlign: 'center' }} onClick={handleLogoClick}>
          <img src={'/static/images/logo.jpg'} alt="Lufu" style={{ height: '50px' }} />
        </div>

        {/* Menu */}
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
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => handleNavigate('/')}>Nos souvenirs</MenuItem>
          <MenuItem onClick={() => handleNavigate('/enigmas')}>Les énigmes secrètes</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;

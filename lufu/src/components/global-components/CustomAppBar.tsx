// CustomAppBar.tsx
import React from 'react';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const CustomAppBar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    // Rediriger vers la page d'accueil
    navigate('/');
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#f69fbe' }}>
      <Toolbar>
        <IconButton edge="start" aria-label="menu" style={{ color: '#8b1123'}}>
          <MenuIcon />
        </IconButton>
        <div style={{ flexGrow: 1, textAlign: 'center' }} onClick={handleLogoClick}>
          <img src={'/static/images/logo.jpg'} alt="Lufu" style={{ height: '50px' }} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;

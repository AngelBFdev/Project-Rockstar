import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Header() {
  const styles = {
    nav: {
      "justify-content": "flex-end",
    },
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx ={styles.nav}>
          <IconButton>
            Cart
            <ShoppingCartIcon/>
          </IconButton>
          <IconButton>
            Login
            <PersonIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


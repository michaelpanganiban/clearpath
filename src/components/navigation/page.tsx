'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { NavDrawer } from './drawer';
import { Grid, Stack, styled } from '@mui/material';
import { COLORS } from '@/src/enum/colors';
import { Dispatch, SetStateAction, useState } from 'react';
import { NAV_ITEMS } from '@/src/enum/constants';

interface IProps {
  setViewComponents: Dispatch<SetStateAction<string>>;
}

export const NavBar:React.FC<IProps> = ({setViewComponents}) => {
	const [mobileOpen, setMobileOpen] = useState(false);
  const [isClicked, setIsClicked] = useState('');

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

  const handleClick = (id: string) => {
    setIsClicked(id);
    setViewComponents('/')
  };


  const NavBar = styled(AppBar, {
    name: 'NavBarComponent',
    slot: 'Root'
  })({})

  return (
    <Stack
      sx={{
        display: 'flex',
        position: 'sticky',
        top: {
          xs: '134px',
          md: '80px',
          lg: '48px'
        }, // Sticks to the top of the viewport
        zIndex: 999, // Ensures it's above other content (adjust as needed)
      }}
    >
      <CssBaseline />
      <NavBar>
        <Toolbar sx={{ height: '100px' }}>
          <Grid container columns={12}>
            <Grid item xs={12} sm={6}>
              <Stack alignItems={{ xs: 'start', sm: 'center' }} >
                <Stack
                  component="img"
                  alt="Company logo"
                  src='logo.png'
                  width={{ xs: '50%', sm: 'inherit' }}
                />
              </Stack>
            </Grid>
            <Grid item xs={6} order={{ xs: 3, md: 2 }}>
              <Stack alignItems={{ xs: 'end', sm: 'center' }}>
                <Stack sx={{ display: { xs: 'none', md: 'inline' } }}>
                  {NAV_ITEMS.map((item) => (
                    <Button key={item.id} 
                      sx={{ 
                        color: isClicked === item.id ? COLORS.SECONDARY : COLORS.BLACK,
                        fontWeight: isClicked === item.id ? 'bold' : 'initial',
                        '&:hover': { color: COLORS.SECONDARY, fontWeight: 'bold' },
                      }}  
                      component='a'
                      href={`${item.id}`}
                      onClick={() => handleClick(item.id)}
                      >
                      {item.name}
                    </Button>
                  ))}
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={6} order={{ xs: 2, md: 3 }}>
              <Stack alignItems={'end'}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
      </NavBar>
      {/* navbar drawer component */}
      <NavDrawer 
        mobileOpen={mobileOpen} 
        handleDrawerToggle={handleDrawerToggle}
        navItems={NAV_ITEMS}
        setViewComponents={setViewComponents}
      />
    </Stack>
  );
}
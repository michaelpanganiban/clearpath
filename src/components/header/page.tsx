'use client'

import * as React from 'react';
import { AppBar, Stack, styled } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { HeaderDetails } from './header-details';


const HeaderBar = styled(AppBar, {
  name: 'HeaderComponent',
  slot: 'Root'
})({})

export default function Header () {
  return (
    <Stack
      sx={{
        position: 'sticky',
        top: 0, // Sticks to the top of the viewport
        zIndex: 1000, // Ensures it's above other content (adjust as needed)
      }}
    >
      <CssBaseline />
      <HeaderBar sx={{ padding: {xs: '4px', md: '3px', lg: '0px'} }}>
        <HeaderDetails />
      </HeaderBar>
    </Stack>
  );
}